import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { User } from './pages/user/user';
import { Product } from './pages/product/product';
import { ProductDetails } from './pages/product-details/product-details';
import { UserSetting } from './pages/user-setting/user-setting';
import { UserProfile } from './pages/user-profile/user-profile';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((res) => res.Home),
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'user',
    loadComponent: () => import('./pages/user/user').then((res) => res.User),

    children: [
      {
        path: 'setting',
        component: UserSetting,
      },
      {
        path: 'profile',
        component: UserProfile,
      },
    ],
  },
  {
    path: 'product',
    component: Product,
  },
  {
    path: 'product/:name',
    component: ProductDetails,
  },
];
