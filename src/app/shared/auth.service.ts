import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //This return a boolean after checking for the login token
  isLoggedIn(){
    return !!localStorage.getItem("token");
  }
}
