import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  user = signal(JSON.parse(localStorage.getItem('USER') ?? '[]'));
  logOut() {
    if (confirm('Are You Want To logOut ? ')) {
      localStorage.removeItem('USER');
      this.router.navigate(['/']);
    }
  }
}
