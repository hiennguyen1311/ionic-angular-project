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

export type User = {
  id: string;
  name: string;
  image: string;
  dob: string;
};

export type UserUpdate = {
  name?: string;
  image?: string;
  dob?: string;
};
