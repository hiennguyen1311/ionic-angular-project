import { createReducer, on } from '@ngrx/store';
import { ProfileState } from '@models/store.interface';
import { FetchProfileAction } from './profile.action';

export const initialState: ProfileState = {
  data: {},
};

export const ProfileReducer = createReducer(
  initialState,
  on(FetchProfileAction.success, (state, { data }) => {
    return {
      ...state,
      data,
    };
  })
);
