import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() isLogin = true;
  hide = true;
  error = false;
  constructor(private usersService: UsersService, private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if (this.isLogin) {
      // means we are logging in
      let email = loginForm.form.value['email'];
      let password = loginForm.form.value['password'];
      this.usersService.signInUser(email, password);
      if (!this.usersService.signedInUser) {
        this.error = true;
      } else {
        this.router.navigate(['/moviesList']);
      }
    } else {
      // means we are signing up
      let email = loginForm.form.value['email'];
      let password = loginForm.form.value['password'];
      this.error = this.usersService.signUpUser(email, password);
    }
    if (!this.error) loginForm.reset();
    else {
      setInterval(() => {
        this.error = false;
      }, 2000);
    }
  }

  change() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit(): void {}
}
