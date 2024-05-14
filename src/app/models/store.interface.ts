export interface ApplicationState {
  app: AppState;
  auth: AuthState;
  language: LanguageState;
  profile: ProfileState;
}

export interface AuthState {
  token: string;
  loading: boolean;
  email: string;
}

export interface AppState {
  readonly version: string;
  readonly code: number;
  readonly loading: boolean;
  readonly data: any;
}

export interface LanguageState {
  id: string;
}

export interface ProfileState {
  data: any;
}

export interface ActionSuccessResponse<T = any> {
  data: T;
}

export interface ActionFailureResponse<T = any> {
  error: T;
}
