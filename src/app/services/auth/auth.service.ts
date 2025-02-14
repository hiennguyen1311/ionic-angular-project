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
import { LOCAL_STORAGE } from '@constant/enum';

@Injectable({ providedIn: 'root' })
export class AuthService {
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

  public async init() {
    await SplashScreen.show();
    await this.getTokenFromStore();
    await SplashScreen.hide();
  }

  public async getTokenFromStore() {
    const { value } = await LocalStorage.get({ key: LOCAL_STORAGE.USER_INFO });
    if (!isEmpty(value) && value !== null) {
      this.store.dispatch(LoginActionSuccess({ data: JSON.parse(value) }));
      return true;
    }
    this.handleLogout();
    return false;
  }

  public login(username: string, password: string) {
    this.store.dispatch(
      LoginAction({ credentials: { username, password, type: 'email' } })
    );
  }

  public loginWithGoogle() {
    this.store.dispatch(LoginAction({ credentials: { type: 'google' } }));
  }

  public loginSuccess() {
    this.router.navigate(['/main']);
  }

  public loginFailure(error: string) {
    Dialog.alert({
      title: i18n.t('GLOBAL.ERROR'),
      message: error,
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
