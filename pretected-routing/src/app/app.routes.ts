import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Profile } from './pages/profile/profile';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { authGuard } from './auth-guard';
import { Unauthorize } from './common/unauthorize/unauthorize';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'unauthorized',
    component: Unauthorize,
  },
  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard],
    data: {
      roles: ['USER'],
    },
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboard,
    canActivate: [authGuard],
    data: {
      roles: ['ADMIN'],
    },
  },
];
