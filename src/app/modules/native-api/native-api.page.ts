import { Dialog } from '@plugins/Dialog/Dialog';
import { Component, OnInit } from '@angular/core';
import {
  ActionSheet,
  ActionSheetButtonStyle,
} from '@plugins/ActionSheet/ActionSheetPlugin';
import { CameraPlugin, Toast, ShowOptions, Clipboard } from '@plugins/index';
import i18n from '@i18n/i18n';

@Component({
  selector: 'app-native-api',
  templateUrl: './native-api.page.html',
  styleUrls: ['./native-api.page.scss'],
})
export class NativeApiPage implements OnInit {
  buttons = [
    { title: 'Show Action Sheet', click: this.showActionSheetActions },
    { title: 'Show Camera', click: this.showCameraAction },
    { title: 'Show Browser', click: this.showActionSheetActions },
  ];
  dialogType = 'alert';
  dialogTypes = ['alert', 'prompt', 'confirm'];
  toastDuration: ShowOptions['duration'] = 'short';
  toastDurations = ['short', 'long'];
  toastPosistion: ShowOptions['position'] = 'bottom';
  toastPosistions = ['top', 'center', 'bottom'];
  titles = {
    dialog: 'Show Dialog',
    toast: 'Show Toast',
    clipboard: 'Clipboard',
  };
  clipboard = '';
  clipboardValue = '';
  clipboardType = '';

  constructor() {}

  ngOnInit() {}

  handleChangeDialogType(ev: any) {
    this.dialogType = ev;
  }

  handleChangeToastDuration(ev: any) {
    this.toastDuration = ev;
  }

  handleChangeToastPosition(ev: any) {
    this.toastPosistion = ev;
  }

  async showActionSheetActions() {
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share',
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });
  }

  async showCameraAction() {
    await CameraPlugin.showOptions();
  }

  async showDialog() {
    switch (this.dialogType) {
      case 'alert': {
        await Dialog.alert({
          message: 'Alert',
          title: 'Alert title',
          buttonTitle: 'Button title',
        });
        break;
      }
      case 'prompt': {
        await Dialog.prompt({
          message: 'Prompt message',
          cancelButtonTitle: 'Cancel',
          inputText: 'Input text',
          inputPlaceholder: 'Input placeholder',
          okButtonTitle: 'Ok button',
          title: 'Prompt title',
        });
        break;
      }
      case 'confirm': {
        await Dialog.confirm({
          message: 'Prompt message',
          cancelButtonTitle: 'Cancel button',
          okButtonTitle: 'Ok button',
          title: 'Prompt title',
        });
        break;
      }
    }
  }

  async showToast(
    text = 'Toast' + ' ' + this.toastDuration + ' ' + this.toastPosistion
  ) {
    await Toast.show({
      text,
      position: this.toastPosistion,
      duration: this.toastDuration,
    });
  }

  async showClipboard() {
    this.showToast(i18n.t('GLOBAL.COPIED'));
    Clipboard.write({ string: this.clipboard });
  }

  onChangeClipboard(data: any) {
    this.clipboard = data.target!.value;
  }

  async readClipboard() {
    const { value, type } = await Clipboard.read();
    this.clipboardValue = value;
    this.clipboardType = type;
  }
}
