import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Regex } from '@constant/regex';
import i18n from '@i18n/i18n';
import { TranslateService } from '@ngx-translate/core';
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
  showPassword = false;
  public readonly titles = {
    signup: i18n.t('LOGIN.SIGN_UP'),
    forgot_password: i18n.t('LOGIN.FORGOT_PASSWORD'),
    username: i18n.t('LOGIN.EMAIL'),
    password: i18n.t('LOGIN.PASSWORD'),
  };
  token: string = '';
  validation = {
    username: Regex.email,
    password: Regex.password,
  };
  error = '';
  form = new FormGroup({
    username: new FormControl(this.username, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(this.password, Validators.required),
  });

  constructor(
    public authService: AuthService,
    public translate: TranslateService
  ) {}

  ngOnInit() {}

  loading() {
    this.authService.loading;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.username_form?.markAsTouched();
    this.password_form?.markAsTouched();
    if (this.form?.invalid) {
      return;
    }
    this.authService.login(this.username, this.password);
  }

  onChangeUsername(data: any) {
    this.username = data.target!.value;
  }

  onChangePassword(data: any) {
    this.password = data.target!.value;
  }

  get username_form() {
    return this.form.get('username');
  }

  get password_form() {
    return this.form.get('password');
  }
}
