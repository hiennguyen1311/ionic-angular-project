export interface ApplicationState {
  auth: AuthState;
}

export interface AuthState {
  token: string;
  loading: boolean;
}

export interface ActionSuccessResponse<T = any> {
  data: T;
}

export interface ActionFailureResponse<T = any> {
  error: T;
}
