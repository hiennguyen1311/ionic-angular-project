import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@constant/enum';
import i18n from '@i18n/i18n';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';
import { AuthService } from '@services/auth/auth.service';
import { LoginAction } from '@store/login/login.actions';
import { ApplicationStore, Observable, select } from '@store/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token$: Observable<string>;
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
  loading = false;

  constructor(
    private store: Store<ApplicationState>,
    private router: Router,
    private authService: AuthService
  ) {
    this.token$ = store.pipe(select('login', 'token'));
    this.token$.subscribe((message) => {
      this.token = message;
      if (message) {
        this.loginSuccess();
      }
    });
  }

  login() {
    this.loading = true;
    this.store.dispatch(
      LoginAction({ username: this.username, password: this.password })
    );
  }

  onChangeUsername(data: any) {
    this.username = data.target!.value;
  }

  onChangePassword(data: any) {
    this.password = data.target!.value;
  }

  loginSuccess() {
    this.loading = false;
    setTimeout(() => this.router.navigate(['/home']), 200);
  }

  ngOnInit() {}
}
