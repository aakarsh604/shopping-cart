import { User } from '../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupUsers: User[] = [];
  user: User = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  // Initiating the users array from the data retreived from the local storage
  ngOnInit(): void {
    let users = localStorage.getItem('users');
    if (!users) this.signupUsers = [];
    else this.signupUsers = JSON.parse(users);
  }

  // Function to store the users details in the localstorage
  onSubmit() {
    this.signupUsers.push(this.user);
    localStorage.setItem('users', JSON.stringify(this.signupUsers));
    this.user = {
      name: '',
      email: '',
      password: '',
    };
    alert('Registration Successfull!');
    this.router.navigate(['/login']);
  }
}
