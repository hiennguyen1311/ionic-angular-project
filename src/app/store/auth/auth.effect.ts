import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  LoginAction,
  LoginActionSuccess,
  LoginActionFailure,
} from './auth.actions';
import { of, switchMap, catchError, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@services/auth/auth.service';
import { signInFirebase } from '@plugins/Firebase/FirebaseAuth';
import { Auth } from '@angular/fire/auth';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService,
    private auth: Auth
  ) {}

  Login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginAction),
      switchMap(
        async (action) =>
          await signInFirebase(action.username, action.password, this.auth)
      ),
      map((data) => {
        console.log(data);
        return LoginActionSuccess({ data });
      }),
      tap(() => this.authService.loginSuccess()),
      catchError((error) => {
        console.log(error);
        this.authService.loginFailure(error);
        return of(LoginActionFailure({ error }));
      })
    )
  );
}
