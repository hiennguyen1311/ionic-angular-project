import { createAction, props } from '@ngrx/store';
import { actionNameFailure, actionNameSuccess } from './store';
import {
  ActionFailureResponse,
  ActionSuccessResponse,
} from '@models/store.interface';

export function completeAction<T = any>(type: string) {
  return {
    request: createAction(type, props<{ payload: T }>()),
    success: createAction(
      actionNameSuccess(type),
      props<ActionSuccessResponse>()
    ),
    failure: createAction(
      actionNameFailure(type),
      props<ActionFailureResponse>()
    ),
  };
}
