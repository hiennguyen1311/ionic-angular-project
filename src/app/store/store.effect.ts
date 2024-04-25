import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effect';

export const StoreEffect = EffectsModule.forRoot([AuthEffects]);
