import ActionsName from '@constant/actionName';

import { createAction, props } from '@ngrx/store';

export const ChangeLanguageAction = createAction(
  ActionsName.CHANGE_LANGUAGE,
  props<{ id: string }>()
);
