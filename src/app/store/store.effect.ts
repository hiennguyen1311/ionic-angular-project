import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effect';
import { LanguageEffects } from './language.ts/language.effect';

export const StoreEffect = EffectsModule.forRoot([
  AuthEffects,
  LanguageEffects,
]);
