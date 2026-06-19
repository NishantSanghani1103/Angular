import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductListing } from './pages/product-listing/product-listing';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { ProductAdd } from './pages/admin/product-add/product-add';
import { ProductView } from './pages/admin/product-view/product-view';
import { NotFound } from './common/not-found/not-found';
import { authGuardGuard } from './auth-guard-guard';
import { UnAuthorized } from './common/un-authorized/un-authorized';
import { loginGuard } from './login-guard';
import { OrderView } from './pages/admin/order-view/order-view';

export const routes: Routes = [
  {
    path: '',
    component: Login,
    canActivate: [loginGuard],
  },
  {
    path: 'unauthorized',
    component: UnAuthorized,
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuardGuard],
    data: {
      roles: ['CUSTOMER'],
    },
    children: [
      {
        path: 'product',
        component: ProductListing,
      },
      {
        path: 'product/:id',
        component: ProductDetails,
      },
      {
        path: 'cart',
        component: Cart,
      },
      {
        path: 'home',
        component: Home,
      },
    ],
  },

  {
    path: 'admin',
    title: 'Admin',
    component: AdminLayout,
    canActivate: [authGuardGuard],
    data: {
      roles: ['ADMIN'],
    },
    children: [
      {
        path: 'dashboard',

        component: Dashboard,
      },
      {
        path: 'orders',
        component: OrderView,
      },
      {
        path: 'product',
        children: [
          {
            path: 'add',
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
  {
    path: '**',
    component: NotFound,
  },
];
