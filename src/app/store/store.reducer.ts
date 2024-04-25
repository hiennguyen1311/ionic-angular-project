import { ApplicationState } from '@models/store.interface';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './auth/auth.reducer';

export const StoreReducer = StoreModule.forRoot<ApplicationState>({
  auth: AuthReducer,
});
