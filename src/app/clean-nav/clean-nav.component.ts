import { Component, ViewEncapsulation } from '@angular/core';
import { UsersService } from './login/users.service';

@Component({
  selector: 'app-clean-nav',
  templateUrl: 'clean-nav.component.html',
  styleUrls: ['clean-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CleanNavComponent {
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
