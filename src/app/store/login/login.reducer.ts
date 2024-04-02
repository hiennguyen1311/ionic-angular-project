import { Action, createReducer, on } from '@ngrx/store';
import ActionsName from '@constant/actionName';
import { LoginState } from '@models/store.interface';
import {
  LoginAction,
  LoginActionFailure,
  LoginActionSuccess,
  LogoutAction,
} from './login.actions';
import localStorage from '@plugins/LocalStorage/localStorage';

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
    localStorage.set({ key: 'token', value: 'token' });
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
    localStorage.set({ key: 'token', value: '' });
    return {
      ...state,
      token: '',
    };
  })
);
