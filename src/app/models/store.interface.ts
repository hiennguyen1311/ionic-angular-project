export interface ApplicationState {
  auth: AuthState;
  language: LanguageState;
}

export interface AuthState {
  token: string;
  loading: boolean;
}

export interface LanguageState {
  id: string;
}

export interface ActionSuccessResponse<T = any> {
  data: T;
}

export interface ActionFailureResponse<T = any> {
  error: T;
}
