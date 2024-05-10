import { createReducer, on } from '@ngrx/store';
import { AuthState } from '@models/store.interface';
import {
  LoginAction,
  LoginActionFailure,
  LoginActionSuccess,
  LogoutAction,
} from './auth.actions';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';
import { LOCAL_STORAGE } from '@constant/enum';

export const initialState: AuthState = {
  token: '',
  loading: false,
  email: '',
};

export const AuthReducer = createReducer(
  initialState,
  on(LoginAction, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(LoginActionSuccess, (state, { data }) => {
    LocalStorage.set({ key: LOCAL_STORAGE.TOKEN, value: data.token });
    LocalStorage.set({
      key: LOCAL_STORAGE.USER_INFO,
      value: JSON.stringify(data),
    });
    return {
      ...state,
      token: data.token,
      email: data.username,
      loading: false,
    };
  }),
  on(LoginActionFailure, (state, {}) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(LogoutAction, (state, {}) => {
    LocalStorage.set({ key: LOCAL_STORAGE.TOKEN, value: '' });
    return initialState;
  })
);
