import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';

  constructor(public router: Router, private auth : AuthService){}

  ngOnInit(){ }

  // Function to see if the user is logged in for conditional rendering in the navbar
  loggedIn(){
    return localStorage.getItem("token");
  }

  // Function to log out the user and delete the token from localstorage
  logout(){
    localStorage.removeItem("token");
    alert("Logged out!")
  }
}
