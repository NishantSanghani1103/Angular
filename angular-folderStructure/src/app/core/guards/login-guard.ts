import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('USER') ?? '[]');
  const router = inject(Router);
  if (user?.role == 'admin') {
    return router.navigate(['/admin/dashboard']);
  }
  if (user?.role == 'user') {
    return router.navigate(['/home']);
  }

  return true;
};
