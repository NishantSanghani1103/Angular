import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('USER') ?? '[]');
  console.log(user);
  const allowedRole = route.data['roles'];
  console.log(allowedRole);
  if (allowedRole.includes(user?.role)){
    return true
  } return router.navigate(['/un-authorized']);
};
