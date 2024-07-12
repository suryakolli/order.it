import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() formToggle = new EventEmitter<boolean>();

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  logout() {
    this.authService.logout();
  }

  toggleForm(showLogin: boolean) {
    this.authService.toggleLogin(showLogin);
  }
}
