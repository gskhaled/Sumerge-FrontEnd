import { Component, ViewEncapsulation } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form-switcher',
  templateUrl: 'form-switcher.component.html',
  styleUrls: ['form-switcher.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormSwitcherComponent {
  isLoggedIn = false;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userSubscription.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
    // this.isLoggedIn = !!this.usersService.signedInUser;
  }

  // ngOnDestroy() {
  //   this.usersService.userSubscription.unsubscribe();
  // }
}
