import { ApplicationState } from '@models/store.interface';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './auth/auth.reducer';
import { LanguageReducer } from './language.ts/language.reducer';

export const StoreReducer = StoreModule.forRoot<ApplicationState>({
  auth: AuthReducer,
  language: LanguageReducer,
});
