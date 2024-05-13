import ActionsName from '@constant/actionName';

import { completeAction } from '@store/store.action';

export const UpdateProfileAction = completeAction(ActionsName.UPDATE_PROFILE);

export const FetchProfileAction = completeAction(ActionsName.FETCH_PROFILE);
