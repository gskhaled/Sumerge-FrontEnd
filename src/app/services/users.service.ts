import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export class User {
  constructor(public email: string, public password: string) {}
}

const users = [
  new User('gasser@g.com', '1234'),
  new User('khaled@g.com', '1234'),
  new User('salah@g.com', '1234'),
];

@Injectable()
export class UsersService {
  userSubscription = new BehaviorSubject<User>(null!);
  signedInUser!: User;

  constructor(private http: HttpClient) {
    let userJSON = localStorage.getItem('userData');
    if (userJSON != null) {
      this.signedInUser = JSON.parse(userJSON);
      this.userSubscription.next(this.signedInUser);
    }
  }

  signInUser(email: string, password: string): User {
    if (
      users.some((user) => user.email == email && user.password == password)
    ) {
      this.signedInUser = new User(email, password);
      localStorage.setItem('userData', JSON.stringify(this.signedInUser));
      this.userSubscription.next(this.signedInUser);
    }
    return this.signedInUser;
  }

  signUpUser(email: string, password: string) {
    if (users.some((user) => user.email == email)) {
      return true;
    } else {
      users.push({
        email: email,
        password: password,
      });
      return false;
    }
  }

  logout() {
    localStorage.removeItem('userData');
    this.signedInUser = <User>{};
    this.userSubscription.next(null!);
  }
}
