import ActionsName from '@constant/actionName';
import {
  ActionFailureResponse,
  ActionSuccessResponse,
} from '@models/store.interface';

import { createAction, props } from '@ngrx/store';
import { actionNameFailure, actionNameSuccess } from '@store/store';

export const UpdateProfileAction = createAction(
  ActionsName.UPDATE_PROFILE,
  props<{ payload: any }>()
);

export const UpdateProfileActionSuccess = createAction(
  actionNameSuccess(ActionsName.UPDATE_PROFILE),
  props<ActionSuccessResponse>()
);

export const UpdateProfileActionFailure = createAction(
  actionNameFailure(ActionsName.UPDATE_PROFILE),
  props<ActionFailureResponse>()
);
