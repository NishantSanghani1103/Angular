import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth-service';

export const authGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const allowRoles = route.data['roles'];
  if (allowRoles.includes(authService.getRole())) {
    return true;
  }
  router.navigate(['/unauthorized']);
  return false;
};
