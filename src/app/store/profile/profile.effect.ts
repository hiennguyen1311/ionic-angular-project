import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { FetchProfileAction } from './profile.action';
import { actionNameSuccess, actionSuccess } from '@store/store';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions) {}

  UpdateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchProfileAction.request),
      switchMap(async (action) => {
        return {
          type: actionNameSuccess(action.type),
          data: action.payload,
        };
      })
    )
  );
}
