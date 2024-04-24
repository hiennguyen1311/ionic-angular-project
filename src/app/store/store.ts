import {
  ActionFailureResponse,
  ActionSuccessResponse,
  ApplicationState,
} from '@models/store.interface';
import { Store } from '@ngrx/store';
export { Observable } from 'rxjs';
export { select } from '@ngrx/store';

export class ApplicationStore extends Store<ApplicationState> {}

export const action = <T>(type: string, payload: T) => {
  return {
    type,
    payload,
  };
};

export const actionSuccess =
  <T>(type: string) =>
  (payload: ActionSuccessResponse<T>) =>
    action(type, payload);

export const actionFailure =
  <T>(type: string) =>
  (payload: ActionFailureResponse<T>) =>
    action(type, payload);

export const actionNameSuccess = (action: string) => action + '_SUCCESS';
export const actionNameFailure = (action: string) => action + '_FAILURE';
