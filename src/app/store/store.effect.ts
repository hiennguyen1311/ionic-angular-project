import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effect';
import { LanguageEffects } from './language.ts/language.effect';
import { ProfileEffects } from './profile/profile.effect';
import { AppEffects } from './app/app.effect';

export const StoreEffect = EffectsModule.forRoot([
  AuthEffects,
  LanguageEffects,
  ProfileEffects,
  AppEffects,
]);
