import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from '../../../data/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ValidationError } from '../../common/validation-error/validation-error';
import { ApiService } from '../../service/api.service';
import { LoginResType } from '../../models/loginModel';
import { DemoService } from '../../service/demo.service';

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
    public apiService: ApiService,
    private demoService:DemoService
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

  async loginData() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      try {
        const res = await this.apiService.request<LoginResType>(
          'POST',
          'auth/login',
          this.loginForm.value,
          null,
          {
            showLoader: true,
            showToaster: true,
            useToken: true,
          },
        );
        // console.log(res);
        if (res.status) {
          localStorage.setItem('USER', JSON.stringify(res.data));
          localStorage.setItem('TOKEN', res['token']);
          setTimeout(() => {
            if (res.data?.role == 'ADMIN') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/home']);
            }
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
