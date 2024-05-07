import { SplashScreen } from '@capacitor/splash-screen';
import { Dialog } from '@plugins/Dialog/Dialog';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';
import {
  LoginAction,
  LoginActionSuccess,
  LogoutAction,
} from '@store/auth/auth.actions';
import { isEmpty } from '@utils/util';
import { Observable } from 'rxjs';
import i18n from '@i18n/i18n';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authSecretKey = 'token';
  loading = false;
  loading$: Observable<boolean>;
  titles = {
    logout: i18n.t('HOME.LOGOUT'),
    logout_confirm: i18n.t('PROFILE.LOGOUT_CONFIRM'),
    cancel: i18n.t('GLOBAL.CANCEL'),
  };

  constructor(private store: Store<ApplicationState>, private router: Router) {
    this.loading$ = this.store.pipe(select('auth', 'loading'));
    this.loading$.subscribe((value) => {
      this.loading = value;
    });
  }

  public async getTokenFromStore() {
    await SplashScreen.show();
    const { value } = await LocalStorage.get({ key: this.authSecretKey });
    await SplashScreen.hide();
    if (!isEmpty(value)) {
      this.store.dispatch(LoginActionSuccess({ data: { token: value } }));
      return true;
    }
    this.handleLogout();
    return false;
  }

  public login(username: string, password: string) {
    this.store.dispatch(LoginAction({ username, password }));
  }

  public loginSuccess() {
    this.router.navigate(['/main']);
  }

  public loginFailure(error: string) {
    Dialog.alert({
      title: i18n.t('GLOBAL.ERROR'),
      message: i18n.t('ERROR.INVALID_LOGIN'),
    });
  }

  public handleLogout() {
    this.store.dispatch(LogoutAction());
    this.router.navigate(['/login']);
  }

  public async logout() {
    const { value } = await Dialog.confirm({
      title: this.titles.logout,
      message: this.titles.logout_confirm,
      okButtonTitle: this.titles.logout,
      cancelButtonTitle: this.titles.cancel,
    });
    if (value) {
      this.handleLogout();
    }
  }
}
