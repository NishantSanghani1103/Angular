import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('USER') ?? '[]');
  // console.log(user);

  const allowedUser = route.data['roles'];
  console.log(allowedUser);

  if (allowedUser.includes(user?.role)) {
    return true;
  }

  return router.navigate(['/unauthorized']);
};
