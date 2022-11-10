import { User } from '../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signupUsers: User[] = [];
  user = {
    email: '',
    password: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {
    let users = localStorage.getItem('users');
    if (!users) this.signupUsers = [];
    else this.signupUsers = JSON.parse(users);
  }

  // Function to authenticate the user credentials with the saved data and creating a token
  onLogin() {
    const isUserExists = this.signupUsers.find(
      (m) => m.email == this.user.email && m.password == this.user.password
    );
    this.user = {
      email: '',
      password: '',
    };

    // Return alert if the user doesn't exists
    if (!isUserExists) alert('Wrong Credentials!');

    // Otherwise saves the token to the localstorage and redirects to products page
    else {
      alert('Successfully Logged In!');
      localStorage.setItem('token', 'hwuroodiy.kushosfeiiicu.lsfehehoisdci');
      this.router.navigate(['/products']);
    }
  }
}
