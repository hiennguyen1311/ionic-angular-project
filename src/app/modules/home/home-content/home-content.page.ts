import { Component, OnInit } from '@angular/core';
import { LogoutAction } from '@store/login/login.actions';
import i18n from '@i18n/i18n';
import { NavController, Platform } from '@ionic/angular';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';

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
  };
  constructor(
    public navCtrl: NavController,
    private store: Store<ApplicationState>,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(5, () => {});
  }

  ngOnInit(): void {}

  goToScan() {
    this.navCtrl.navigateRoot('scan');
  }

  goToRecongnition() {
    this.navCtrl.navigateRoot('text-recongition');
  }

  goToTabs() {
    this.navCtrl.navigateRoot('tabs');
  }

  goToSideMenu() {
    this.navCtrl.navigateRoot('menu');
  }

  logout() {
    this.store.dispatch(LogoutAction());
    this.navCtrl.navigateRoot('/login');
  }
}
