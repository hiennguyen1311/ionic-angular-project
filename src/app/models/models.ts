export type FirebaseCredentials =
  | FirebaseEmailCrendentials
  | FirebaseMobileCredentials
  | FirebaseGoogleCrendentials;

export type FirebaseMobileCredentials = {
  type: 'mobile';
  mobileNo: string;
};

export type FirebaseEmailCrendentials = {
  type: 'email';
  username: string;
  password: string;
};

export type FirebaseGoogleCrendentials = {
  type: 'google';
};
