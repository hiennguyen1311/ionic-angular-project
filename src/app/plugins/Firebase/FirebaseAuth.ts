import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import i18n from '@i18n/i18n';
import {
  FirebaseCredentials,
  FirebaseEmailCrendentials,
  FirebaseGoogleCrendentials,
} from '@models/models';
import { get } from 'lodash';
const GOOGLE_RPOVIDER = new GoogleAuthProvider();

export function signInFirebase(
  credentials: FirebaseCredentials,
  auth = getAuth()
): Promise<{ token: string }> {
  switch (credentials.type) {
    case 'email': {
      return signInFirebaseWithEmail(credentials, auth);
    }
    case 'google': {
      return signInFirebaseWithGoogle(auth);
    }
    default: {
      return new Promise((_, reject) =>
        reject('Can not find authentication provider')
      );
    }
  }
}

export function signInFirebaseWithEmail(
  credentials: FirebaseEmailCrendentials,
  auth = getAuth()
): Promise<{ token: string }> {
  const { username, password } = credentials;
  return new Promise(async (resolve, reject) =>
    signInWithEmailAndPassword(auth, username, password)
      .then((result) =>
        resolve({
          token: get(result, 'user.accessToken', '') as string,
          ...credentials,
        })
      )
      .catch(() => reject(new Error(i18n.t('ERROR.INVALID_LOGIN')).message))
  );
}

export function signInFirebaseWithGoogle(
  auth = getAuth()
): Promise<{ token: string }> {
  return new Promise(async (resolve, reject) =>
    signInWithPopup(auth, GOOGLE_RPOVIDER)
      .then((result) =>
        resolve({
          token: get(result, 'user.accessToken', '') as string,
        })
      )
      .catch((error) => reject(new Error(error).message))
  );
}

export async function signOutFirebase(auth = getAuth()) {
  return new Promise(async (resolve, reject) =>
    signOut(auth)
      .then(() => resolve(true))
      .catch((error) => reject(new Error(error).message))
  );
}
