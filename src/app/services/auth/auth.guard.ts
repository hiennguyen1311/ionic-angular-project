import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from '@store/store';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.getTokenFromStore();
  }
}
