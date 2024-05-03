import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { AuthService } from '@services/auth/auth.service';

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
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  async logout() {
    await this.authService.logout();
  }
}
