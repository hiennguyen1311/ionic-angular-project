import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  LoginAction,
  LoginActionSuccess,
  LoginActionFailure,
  LogoutAction,
  LogoutActionSuccess,
  LogoutActionFailure,
} from './auth.actions';
import { of, switchMap, catchError, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@services/auth/auth.service';
import {
  signInFirebase,
  signOutFirebase,
} from '@plugins/Firebase/FirebaseAuth';
import { Auth } from '@angular/fire/auth';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private auth: Auth
  ) {}

  SignIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginAction),
      switchMap(
        async (action) => await signInFirebase(action.credentials, this.auth)
      ),
      map((data) => {
        return LoginActionSuccess({ data });
      }),
      tap(() => this.authService.loginSuccess()),
      catchError((error) => {
        this.authService.loginFailure(error);
        return of(LoginActionFailure({ error }));
      })
    )
  );

  SignOut = createEffect(() =>
    this.actions$.pipe(
      ofType(LogoutAction),
      switchMap(async () => await signOutFirebase(this.auth)),
      map(() => {
        return LogoutActionSuccess({ data: true });
      }),
      catchError((error) => {
        return of(LogoutActionFailure({ error }));
      })
    )
  );
}
