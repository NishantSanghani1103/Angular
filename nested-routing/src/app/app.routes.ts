import { Routes } from '@angular/router';
import { User } from './pages/user/user';
import { UserProgile } from './pages/user-progile/user-progile';
import { UserSetting } from './pages/user-setting/user-setting';
import { Admin } from './pages/admin/admin';
import { Profile } from './profile/profile';

export const routes: Routes = [
  {
    path: 'user',
    loadComponent: () => import('./pages/user/user').then((res) => res.User),
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/user-progile/user-progile').then((res) => res.UserProgile),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('./pages/user-setting/user-setting').then((res) => res.UserSetting),
      },
    ],
  },

  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then((res) => res.Admin),
  },
  {
    path: 'profile',
    component: Profile,
  },
];
