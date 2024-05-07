import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { get } from 'lodash';

export function signInFirebase(
  username: string,
  password: string,
  auth = getAuth()
) {
  return new Promise(async (resolve, reject) =>
    signInWithEmailAndPassword(auth, username, password)
      .then((result) =>
        resolve({
          token: get(result, 'user.accessToken'),
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
