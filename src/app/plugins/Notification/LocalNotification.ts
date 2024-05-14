import { LocalNotifications, ScheduleOptions } from '@plugins';
export type { ScheduleResult } from '@capacitor/local-notifications';
export { PermissionStatus } from '@capacitor/local-notifications';

class LocalNotification {
  constructor() {}

  public async schedule(options: ScheduleOptions) {
    return await LocalNotifications.schedule(options);
  }

  public async checkPermssion() {
    return await LocalNotifications.checkPermissions();
  }

  public async requestPermssion() {
    return await LocalNotifications.requestPermissions();
  }

  public async changeExactNotificationSetting() {
    return await LocalNotifications.changeExactNotificationSetting();
  }

  public async checkExactNotificationSetting() {
    return await LocalNotifications.checkExactNotificationSetting();
  }
}

export default new LocalNotification();
