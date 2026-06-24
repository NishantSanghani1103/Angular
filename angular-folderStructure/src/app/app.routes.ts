import { Routes } from '@angular/router';
import { UserLayout } from './features/user/user-layout/user-layout';
import { Home } from './features/user/home/home';
import { ProductListing } from './features/user/products/product-listing/product-listing';
import { ProductDetails } from './features/user/products/product-details/product-details';
import { AdminLayout } from './features/admin/admin-layout/admin-layout';
import { Dashboard } from './features/admin/dashboard/dashboard';
import { ProductAdd } from './features/admin/product-add/product-add';
import { ProductView } from './features/admin/product-view/product-view';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { AuthLayout } from './auth/auth-layout/auth-layout';
import { authGuard } from './core/guards/auth-guard';
import { UnAuthorized } from './shared/components/un-authorized/un-authorized';
import { loginGuard } from './core/guards/login-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'un-authorized',
    component: UnAuthorized,
  },
  {
    path: '',
    component: AuthLayout,
    canActivate: [loginGuard],
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      },
    ],
  },
  {
    path: '',
    component: UserLayout,
    canActivate: [authGuard],
    data: {
      roles: ['user'],
    },
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'products',
        component: ProductListing,
      },
      {
        path: 'product/:slug',
        component: ProductDetails,
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin-layout/admin-layout').then((res) => res.AdminLayout),
    canActivate: [authGuard],
    data: {
      roles: 'admin',
    },
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'product',
        children: [
          {
            path: 'add',
            component: ProductAdd,
          },
          {
            path: 'edit/:id',
            component: ProductAdd,
          },
          {
            path: 'view',
            component: ProductView,
          },
        ],
      },
    ],
  },
];
