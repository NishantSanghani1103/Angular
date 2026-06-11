import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { USERS } from '../../../../data/userData';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth-service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private fb: FormBuilder,
    public routes: Router,
    public authService: AuthService,
  ) {}
  loginForm!: FormGroup;
  ngOnInit() {
    this.initializeLoginForm();
  }
  initializeLoginForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  logInData() {
    const checkUser = USERS.find((user) => user.email === this.loginForm.get('email')?.value);
    if (!checkUser) {
      alert('User Not Found');
      return;
    }
    this.authService.setUser(checkUser);
    if (checkUser.role === 'ADMIN') {
      this.routes.navigate(['/admin/dashboard']);
    } else if (checkUser.role === 'USER') {
      this.routes.navigate(['/profile']);
    }
  }
}
