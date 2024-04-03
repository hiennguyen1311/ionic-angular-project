import { Action, createReducer, on } from '@ngrx/store';
import ActionsName from '@constant/actionName';
import { LoginState } from '@models/store.interface';
import {
  LoginAction,
  LoginActionFailure,
  LoginActionSuccess,
  LogoutAction,
} from './login.actions';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';

export const initialState: LoginState = {
  token: '',
};

export const LoginReducer = createReducer(
  initialState,
  on(LoginAction, (state) => {
    return {
      ...state,
    };
  }),
  on(LoginActionSuccess, (state, {}) => {
    LocalStorage.set({ key: 'token', value: 'token' });
    return {
      ...state,
      token: 'token',
    };
  }),
  on(LoginActionFailure, (state, {}) => {
    return {
      ...state,
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
