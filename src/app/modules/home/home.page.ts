import { Component } from '@angular/core';
import i18n from '@i18n/i18n';
import { NavController, Platform } from '@ionic/angular';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';
import { LogoutAction } from '@store/login/login.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titles = {
    main: i18n.t('HOME.TITLE'),
    scan_barcode: i18n.t('HOME.SCAN_BARCODE'),
    text_reconigtion: i18n.t('HOME.TEXT_RECONIGTION'),
    logout: i18n.t('HOME.LOGOUT'),
  };
  constructor(
    public navCtrl: NavController,
    private store: Store<ApplicationState>,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(5, () => {});
  }

  goToScan() {
    this.navCtrl.navigateRoot('scan');
  }

  goToRecongnition() {
    this.navCtrl.navigateRoot('text-recongition');
  }

  logout() {
    this.store.dispatch(LogoutAction());
    this.navCtrl.navigateRoot('/login');
  }
}
