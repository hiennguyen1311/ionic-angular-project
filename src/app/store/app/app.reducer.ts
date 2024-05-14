import { createReducer, on } from '@ngrx/store';
import { AppState } from '@models/store.interface';
import { FetchDataAppAction, UpdateAppAction } from './app.action';

export const initialState: AppState = {
  version: '1.0',
  code: 1,
  loading: false,
  data: {},
};

export const AppReducer = createReducer(
  initialState,
  on(UpdateAppAction.request, (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  }),
  on(FetchDataAppAction.request, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(FetchDataAppAction.success, (state, { data }) => {
    return {
      ...state,
      data,
      loading: false,
    };
  }),
  on(FetchDataAppAction.failure, (state) => {
    return {
      ...state,
      loading: false,
      data: {},
    };
  })
);
