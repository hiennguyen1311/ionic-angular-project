import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { NavController } from '@ionic/angular';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';
import { LogoutAction } from '@store/login/login.actions';
import { Dialog } from '@plugins/Dialog/Dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titles = {
    logout: i18n.t('HOME.LOGOUT'),
    logout_confirm: i18n.t('PROFILE.LOGOUT_CONFIRM'),
    cancel: i18n.t('GLOBAL.CANCEL'),
  };
  constructor(
    private store: Store<ApplicationState>,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  async logout() {
    const { value } = await Dialog.confirm({
      title: this.titles.logout,
      message: this.titles.logout_confirm,
      okButtonTitle: this.titles.logout,
      cancelButtonTitle: this.titles.cancel,
    });
    if (value) {
      this.store.dispatch(LogoutAction());
      this.navCtrl.navigateRoot('/login');
    }
  }
}
