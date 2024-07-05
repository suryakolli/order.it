import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  logout() {
    this.authService.logout();
  }
}
