import { createReducer, on } from '@ngrx/store';
import { LanguageState } from '@models/store.interface';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';
import { ChangeLanguageAction } from './language.action';

export const initialState: LanguageState = {
  id: 'en',
};

export const LanguageReducer = createReducer(
  initialState,
  on(ChangeLanguageAction, (state, { id }) => {
    return {
      ...state,
      id,
    };
  })
);
