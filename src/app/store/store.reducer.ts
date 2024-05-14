import { ApplicationState } from '@models/store.interface';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './auth/auth.reducer';
import { LanguageReducer } from './language.ts/language.reducer';
import { ProfileReducer } from './profile/profile.reducer';
import { AppReducer } from './app/app.reducer';

export const StoreReducer = StoreModule.forRoot<ApplicationState>({
  app: AppReducer,
  auth: AuthReducer,
  language: LanguageReducer,
  profile: ProfileReducer,
});
