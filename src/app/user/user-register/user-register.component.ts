import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserRegisterComponent {
  registerForm: FormGroup;
  submitted= false;
  error: string|null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe({
        next: () => this.route.navigate(['/login']),
        error: (err) => {
          this.error = err.error?.detail || 'Registration failed';
        }
      });
    }
  }

}
