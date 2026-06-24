import { inject, Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  toast = inject(ToastService);
  routes = inject(Router);
  user = [
    {
      email: 'ns@gmail.com',
      password: '123456',
      role: 'admin',
    },
    {
      email: 'nishant@gmail.com',
      password: '123456',
      role: 'user',
    },
  ];

  login(loginData: any) {
    console.log(loginData);
    const checkEmail = this.user.find((value, index) => value.email === loginData.email);
    if (!checkEmail) {
      this.toast.error("Email Doesn't Exists....!!");
      return;
    }
    if (checkEmail.password !== loginData.password) {
      this.toast.error("Password Doesn't Matched....!!");
      return;
    }
    this.toast.success('Login SuccessFully...!!');
    setTimeout(() => {
      if (checkEmail.role == 'admin') {
        this.routes.navigate(['/admin/dashboard']);
      } else {
        this.routes.navigate(['/home']);
      }
    }, 2000);

    localStorage.setItem('USER', JSON.stringify(checkEmail));
  }
  logOut() {
    if (confirm('Are You Want To LogOut ?')) {
      localStorage.removeItem('USER');
      this.routes.navigate(['/']);
    }
  }
}
