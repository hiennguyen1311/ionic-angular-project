export interface ApplicationState {
  auth: AuthState;
  language: LanguageState;
  profile: ProfileState;
}

export interface AuthState {
  token: string;
  loading: boolean;
  email: string;
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
