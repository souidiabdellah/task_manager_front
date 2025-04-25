import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth:AuthService, private router: Router){}

  onSubmit(){
    this.error = '';
    this.auth.login(this.email,this.password).subscribe(
      {
        next: () => this.router.navigate(['/tasks']),
        error : (err) => this.error = err.error?.message || 'login failed'
      }
    );
  }
}
