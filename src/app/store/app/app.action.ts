import ActionsName from '@constant/actionName';
import { completeAction } from '@store/store.action';

export const UpdateAppAction = completeAction<{
  version?: string;
  code?: number;
}>(ActionsName.UPDATE_APP);

export const FetchDataAppAction = completeAction<{ isShowError?: boolean }>(
  ActionsName.FETCH_APP_DATA
);
