export type FirebaseCredentials =
  | FirebaseEmailCrendentials
  | FirebaseMobileCredentials;
export type FirebaseMobileCredentials = {
  mobileNo: string;
};
export type FirebaseEmailCrendentials = {
  username: string;
  password: string;
};
