import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth : AuthService, private router: Router){}

  // To implement private route, checks for login token
  canActivate () {
    if ( this.auth.isLoggedIn() ) return true;
    else this.router.navigate(["/login"]);
    return false;
  }
}
