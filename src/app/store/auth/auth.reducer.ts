import { createReducer, on } from '@ngrx/store';
import { AuthState } from '@models/store.interface';
import {
  LoginAction,
  LoginActionFailure,
  LoginActionSuccess,
  LogoutAction,
} from './auth.actions';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';

export const initialState: AuthState = {
  token: '',
  loading: false,
};

export const AuthReducer = createReducer(
  initialState,
  on(LoginAction, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(LoginActionSuccess, (state, {}) => {
    LocalStorage.set({ key: 'token', value: 'token' });
    return {
      ...state,
      token: 'token',
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
    LocalStorage.set({ key: 'token', value: '' });
    return {
      ...state,
      token: '',
    };
  })
);
