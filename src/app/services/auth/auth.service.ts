import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';
import { LoginActionSuccess, LogoutAction } from '@store/login/login.actions';
import { isEmpty } from '@utils/util';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authSecretKey = 'token';

  constructor(private store: Store<ApplicationState>, private router: Router) {
    LocalStorage.get({ key: this.authSecretKey }).then((data) => {
      if (!isEmpty(data.value)) {
        this.store.dispatch(LoginActionSuccess({ data: data.value }));
      }
    });
  }

  public async getTokenFromStore() {
    const { value } = await LocalStorage.get({ key: this.authSecretKey });
    if (!isEmpty(value)) {
      this.store.dispatch(LoginActionSuccess({ data: value }));
      return true;
    }
    return this.store.pipe(
      map((data) => {
        console.log(data);
        if (data.login.token) {
          console.log('loginsuccess');
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }

  public logout() {
    this.router.navigate(['/login']);
    this.store.dispatch(LogoutAction());
  }
}
