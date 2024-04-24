import { Component } from '@angular/core';
import i18n from '@i18n/i18n';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titles = {
    main: i18n.t('HOME.TITLE'),
  };
  constructor(private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(5, () => {});
  }
}
