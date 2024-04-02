import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  LoginAction,
  LoginActionSuccess,
  LoginActionFailure,
} from './login.actions';
import { of, switchMap, catchError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginAction),
      switchMap(() =>
        this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
          map((data) => LoginActionSuccess({ data })),
          catchError((error) => of(LoginActionSuccess({ data: {} })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
