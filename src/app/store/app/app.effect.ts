import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FetchDataAppAction } from './app.action';
import { Api } from '@constant/api';
import { DialogService } from '@services/index';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private readonly dialogService: DialogService
  ) {}

  FetchSampleData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchDataAppAction.request),
      switchMap((action) =>
        this.http
          .get(action.payload.isShowError ? Api.sample2 : Api.sample)
          .pipe(
            map((data) => FetchDataAppAction.success({ data })),
            catchError((error) => {
              this.dialogService.showErrorAlert({
                message: JSON.stringify(error),
              });
              return of(FetchDataAppAction.failure({ error }));
            })
          )
      )
    )
  );
}
