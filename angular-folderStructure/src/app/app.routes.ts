import { Routes } from '@angular/router';
import { UserLayout } from './features/user/user-layout/user-layout';
import { Home } from './features/user/home/home';
import { ProductListing } from './features/user/products/product-listing/product-listing';
import { ProductDetails } from './features/user/products/product-details/product-details';
import { AdminLayout } from './features/admin/admin-layout/admin-layout';
import { Dashboard } from './features/admin/dashboard/dashboard';
import { ProductAdd } from './features/admin/product-add/product-add';
import { ProductView } from './features/admin/product-view/product-view';

export const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    children: [
      {
        path: '',
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
    component: AdminLayout,
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
            path: 'view',
            component: ProductView,
          },
        ],
      },
    ],
  },
];
