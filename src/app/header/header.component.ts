import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../clean-nav/login/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userSubscription.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  ngOnDestroy() {
    this.usersService.userSubscription.unsubscribe();
  }
}
