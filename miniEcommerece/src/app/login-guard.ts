import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('USER') ?? '[]');
  const router = inject(Router);
  if (user?.role == 'ADMIN') {
    return router.navigate(['/admin/dashboard']);
  }
  if (user?.role == 'CUSTOMER') {
    return router.navigate(['/home']);
  }

  return true;
};
