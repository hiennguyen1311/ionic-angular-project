import { get } from '@utils/util';
import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { AuthService } from '@services/auth/auth.service';
import { ProfileSerivce } from '@services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public titles = {
    logout: i18n.t('HOME.LOGOUT'),
    logout_confirm: i18n.t('PROFILE.LOGOUT_CONFIRM'),
    cancel: i18n.t('GLOBAL.CANCEL'),
  };
  public editting = '';
  public edittingValue = '';

  constructor(
    private authService: AuthService,
    public profile: ProfileSerivce
  ) {}

  ngOnInit() {
    this.profile.init();
  }

  async logout() {
    await this.authService.logout();
  }

  async updateProfile() {
    await this.profile.updateProfile({});
  }

  showEditField(field: string) {
    this.editting = field;
    this.edittingValue = get(this.profile.profile, field, '');
  }

  updateField() {
    this.profile.updateProfile({ [this.editting]: this.edittingValue });
    this.showEditField('');
  }

  updateFieldDob(ev: any) {
    this.profile.updateProfile({ dob: ev?.target.value });
    this.showEditField('');
  }

  onChangeField(ev: any) {
    this.edittingValue = ev.target.value;
  }
}
