import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  private _user = signal(JSON.parse(localStorage.getItem('USER') ?? '[]'));
  user=this._user.asReadonly()
  logOut() {
    if (confirm('Are You Want To logOut ? ')) {
      localStorage.removeItem('USER');
      localStorage.removeItem('TOKEN');
      this.router.navigate(['/']);
    }
  }
}
