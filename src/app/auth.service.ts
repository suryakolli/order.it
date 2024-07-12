import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private loginPage = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
  signup() {
    this.loggedIn.next(true);
  }

  get isLoginPage() {
    return this.loginPage.asObservable();
  }

  toggleLogin(data: boolean) {
    this.loginPage.next(data);
  }
}
