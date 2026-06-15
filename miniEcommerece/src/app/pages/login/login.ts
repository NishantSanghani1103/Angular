import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from '../../../data/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ValidationError } from "../../common/validation-error/validation-error";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ValidationError],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public toast: ToastrService,
    public router: Router,
    private authService: AuthService,
  ) {}
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  loginData() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      const checkuser = user.find((value, index) => value.email == email);
      if (checkuser) {
        if (checkuser.password == password) {
          this.toast.success('Logged In Successfully...!!');
          localStorage.setItem('USER', JSON.stringify(checkuser));
          setTimeout(() => {
            if (checkuser.role == 'admin') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/home']);
            }
          }, 2000);
        } else {
          this.toast.error("Password Doesn't Matched....!!");
        }
      } else {
        this.toast.error("User Doesn't Exists....!!");
      }
    }
  }
}
