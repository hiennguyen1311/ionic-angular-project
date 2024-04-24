import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import i18n from '@i18n/i18n';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';
import { LoginAction } from '@store/login/login.actions';
import { Observable, select } from '@store/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading$: Observable<boolean>;
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

  constructor(private store: Store<ApplicationState>, private router: Router) {
    this.loading$ = store.pipe(select('login', 'loading'));
    this.loading$.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnInit() {}

  login() {
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
}
