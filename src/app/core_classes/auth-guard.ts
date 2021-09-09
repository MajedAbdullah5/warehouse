import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRole } from './app-role';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private permission:AppRole,  private router: Router) { 
   this.permission.permission();
  }
  
    canActivate(): boolean {
      if (this.auth.loggedIns()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;

      }
    }
}
