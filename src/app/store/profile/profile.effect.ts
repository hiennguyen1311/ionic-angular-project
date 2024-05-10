import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { UpdateProfileAction } from './profile.action';
import { actionNameSuccess, actionSuccess } from '@store/store';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions) {}

  UpdateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateProfileAction),
      switchMap(async (action) => {
        return {
          type: actionNameSuccess(action.type),
          data: action.payload,
        };
      })
    )
  );
}
