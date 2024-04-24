import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  LoginAction,
  LoginActionSuccess,
  LoginActionFailure,
} from './login.actions';
import { of, switchMap, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Api } from '@constant/api';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginAction),
      switchMap(() =>
        this.http.get(Api.login).pipe(
          map((data) => LoginActionSuccess({ data })),
          catchError((error) => of(LoginActionSuccess({ data: {} })))
        )
      )
    )
  );
}
