import ActionsName from '@constant/actionName';
import {
  ActionFailureResponse,
  ActionSuccessResponse,
} from '@models/store.interface';
import { createAction, props } from '@ngrx/store';
import {
  actionFailure,
  actionNameFailure,
  actionNameSuccess,
  actionSuccess,
} from '@store/store';

export const LoginAction = createAction(
  ActionsName.LOGIN,
  props<{ username: string; password: string }>()
);

export const LoginActionSuccess = createAction(
  actionNameSuccess(ActionsName.LOGIN),
  props<ActionSuccessResponse>()
);

export const LoginActionFailure = createAction(
  actionNameFailure(ActionsName.LOGIN),
  props<ActionFailureResponse>()
);

export const LogoutAction = createAction(ActionsName.LOGOUT);
