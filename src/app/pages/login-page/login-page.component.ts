import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { SignupComponent } from '../../sign-up/sign-up.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NavbarComponent } from '../../navbar/navbar.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    LoginComponent,
    SignupComponent,
    CommonModule,
    NavbarComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  showLogin: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoginPage.subscribe((value) => {
      this.showLogin = value;
    });
  }

  toggleForm(showLogin: boolean) {
    this.authService.toggleLogin(showLogin);
  }
}
