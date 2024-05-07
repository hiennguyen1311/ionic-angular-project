import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { ChangeLanguageAction } from './language.action';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';
import { LOCAL_STORAGE } from '@constant/enum';
import i18n, { setI18nConfig } from '@i18n/i18n';
import { actionNameSuccess } from '@store/store';
import ActionsName from '@constant/actionName';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '@models/store.interface';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageEffects {
  id$;
  id = 'EN';
  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private translate: TranslateService
  ) {
    this.id$ = this.store.pipe(select('language', 'id'));
    this.id$.subscribe((value) => {
      this.id = value;
    });
  }

  ChangeCurrent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChangeLanguageAction),
      switchMap(async (action) => {
        await LocalStorage.set({
          key: LOCAL_STORAGE.LANGUAGE,
          value: action.id,
        });
        setI18nConfig(action.id);
        this.translate.use(action.id);

        return {
          type: actionNameSuccess(ActionsName.CHANGE_LANGUAGE),
          id: action.id,
        };
      })
    )
  );
}
