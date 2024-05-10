import { createReducer, on } from '@ngrx/store';
import { ProfileState } from '@models/store.interface';
import { UpdateProfileActionSuccess } from './profile.action';

export const initialState: ProfileState = {
  data: {},
};

export const ProfileReducer = createReducer(
  initialState,
  on(UpdateProfileActionSuccess, (state, { data }) => {
    return {
      ...state,
      data,
    };
  })
);
