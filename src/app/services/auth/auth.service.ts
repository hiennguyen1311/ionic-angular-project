import { Injectable } from '@angular/core';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'token';

  constructor() {
    LocalStorage.get({ key: this.authSecretKey }).then(
      (data) => this.isAuthenticated == Boolean(data.value)
    );
  }

  async login(username: string, password: string): Promise<boolean> {
    const authToken = 'token';
    if (authToken) {
      await LocalStorage.set({ key: this.authSecretKey, value: authToken });
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  async logout(): Promise<void> {
    await LocalStorage.remove({ key: this.authSecretKey });
    this.isAuthenticated = false;
  }
}
