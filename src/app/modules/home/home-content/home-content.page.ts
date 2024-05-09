import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { NavController, Platform } from '@ionic/angular';
import {
  ActionSheet,
  ActionSheetButtonStyle,
} from '@plugins/ActionSheet/ActionSheetPlugin';
import { CameraPlugin } from '@plugins/index';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.page.html',
  styleUrls: ['./home-content.page.scss'],
})
export class HomeContentPage implements OnInit {
  titles = {
    main: i18n.t('HOME.TITLE'),
    tabs: i18n.t('HOME.TABS'),
    menu: i18n.t('HOME.MENU'),
    content: i18n.t('HOME.CONTENT'),
    action_sheet: 'Show Action Sheet',
    show_camera: 'Show Camera',
    show_browser: 'Show Browser',
  };
  constructor(public navCtrl: NavController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(5, () => {});
  }

  ngOnInit(): void {}

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
}
