import { ScheduleResult } from '@plugins/Notification/LocalNotification';
import { Dialog } from '@plugins/Dialog/Dialog';
import { Injectable } from '@angular/core';
import { LocalNotification, PermissionState } from '@plugins';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  public body = 'Body notification';
  public title = 'Title notification';
  public id = Math.random();
  public actionTypeId = this.id.toString();
  public permission = false;
  public permission_exact = false;
  public status = '';

  constructor() {}

  public async init() {
    await this.permissionHandle();
    await this.exactNotificationSettingHandle();
  }

  public async permissonStateHandle(state: PermissionState) {
    if (state === 'granted') {
      return true;
    }
    if (state === 'denied') {
      this.onPermissionDenied();
      return false;
    }
    if (state === 'prompt' || state === 'prompt-with-rationale') {
      return null;
    }

    return false;
  }

  public async permissionHandle() {
    return new Promise(async (resolve, reject) => {
      const status = await LocalNotification.checkPermssion();
      let permission = await this.permissonStateHandle(status.display);
      if (permission === null) {
        const request = await LocalNotification.requestPermssion();
        permission = request.display === 'granted' ? true : false;
      }
      this.permission = permission;
      if (this.permission) {
        resolve(true);
      } else {
        reject(new Error('Permission Denied'));
      }
    });
  }

  public async onPermissionDenied() {
    await Dialog.alert({
      title: 'Permission Denied',
      message:
        'Please enable notification pemission.\n Go to Settings => App => Permission => Notification',
    });
  }

  public async schedule() {
    return new Promise<ScheduleResult>(async (resolve, reject) => {
      const request = await this.permissionHandle();
      if (!request) {
        reject(new Error('Permission Denied'));
      }
      const result = await LocalNotification.schedule({
        notifications: [
          {
            body: this.body,
            title: this.title,
            id: this.id,
            actionTypeId: this.actionTypeId,
          },
        ],
      });
      resolve(result);
    });
  }

  public async exactNotificationSettingHandle() {
    const status = await LocalNotification.checkPermssion();
    let permission = await this.permissonStateHandle(status.display);
    if (permission === null) {
      const request = await LocalNotification.changeExactNotificationSetting();
      permission = request.exact_alarm === 'granted' ? true : false;
    }
    this.permission_exact = permission;
  }
}
