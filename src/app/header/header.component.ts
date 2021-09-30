import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userSubscription.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
    // this.isLoggedIn = !!this.usersService.signedInUser
  }

  // ngOnDestroy() {
  //   this.usersService.userSubscription.unsubscribe();
  // }

  logout() {
    console.log('Logginggggg outtttt....')
    this.usersService.logout();
  }
}
