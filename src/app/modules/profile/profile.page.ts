import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { NavController } from '@ionic/angular';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';
import { LogoutAction } from '@store/login/login.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titles = {
    logout: i18n.t('HOME.LOGOUT'),
  };
  constructor(
    private store: Store<ApplicationState>,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  logout() {
    this.store.dispatch(LogoutAction());
    this.navCtrl.navigateRoot('/login');
  }
}
