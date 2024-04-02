import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './login/login.effect';

export const StoreEffect = EffectsModule.forRoot([LoginEffects]);
