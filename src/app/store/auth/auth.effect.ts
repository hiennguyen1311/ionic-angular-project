import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginAction, LoginActionSuccess } from './auth.actions';
import { of, switchMap, catchError, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Api } from '@constant/api';
import { AuthService } from '@services/auth/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  Login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginAction),
      switchMap(() =>
        this.http.get(Api.login).pipe(
          map((data) => LoginActionSuccess({ data })),
          tap(() => this.authService.loginSuccess()),
          catchError((error) => {
            this.authService.loginSuccess();
            return of(LoginActionSuccess({ data: {} }));
          })
        )
      )
    )
  );
}
