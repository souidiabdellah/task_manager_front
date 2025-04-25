import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Your auth service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports : [CommonModule]
})
export class NavbarComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    // Subscribe to auth state changes
    this.authService.isLoggedIn$.subscribe(
      (loggedIn) => this.isLoggedIn = loggedIn
    );
  }

  logout() {
    this.authService.logout();
  }
}