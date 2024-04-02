import { ApplicationState } from '@models/store.interface';
import { StoreModule } from '@ngrx/store';
import { LoginReducer } from './login/login.reducer';

export const StoreReducer = StoreModule.forRoot<ApplicationState>({
  login: LoginReducer,
});
