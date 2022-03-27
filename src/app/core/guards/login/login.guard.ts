import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

// Services
import { AuthService } from "../../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private authService: AuthService,
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticate()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }

}
