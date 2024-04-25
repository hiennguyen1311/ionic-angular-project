import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { Store } from '@ngrx/store';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title = i18n.t('LOGIN.TITLE');
  username = '';
  password = '';
  public readonly titles = {
    signup: i18n.t('LOGIN.SIGN_UP'),
    forgot_password: i18n.t('LOGIN.FORGOT_PASSWORD'),
    username: i18n.t('LOGIN.USERNAME'),
    password: i18n.t('LOGIN.PASSWORD'),
  };
  token: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  loading() {
    this.authService.loading;
  }

  login() {
    this.authService.login(this.username, this.password);
  }

  onChangeUsername(data: any) {
    this.username = data.target!.value;
  }

  onChangePassword(data: any) {
    this.password = data.target!.value;
  }
}
