import ActionsName from '@constant/actionName';
import { FirebaseCredentials } from '@models/models';
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
  props<{ credentials: FirebaseCredentials }>()
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

export const LogoutActionSuccess = createAction(
  actionNameSuccess(ActionsName.LOGOUT),
  props<ActionSuccessResponse>()
);

export const LogoutActionFailure = createAction(
  actionNameFailure(ActionsName.LOGOUT),
  props<ActionFailureResponse>()
);
