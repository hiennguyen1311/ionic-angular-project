export interface ApplicationState {
  login: LoginState;
}

export interface LoginState {
  token: string;
  loading: boolean;
}

export interface ActionSuccessResponse<T = any> {
  data: T;
}

export interface ActionFailureResponse<T = any> {
  error: T;
}
