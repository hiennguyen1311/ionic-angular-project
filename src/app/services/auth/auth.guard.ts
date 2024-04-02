import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}
