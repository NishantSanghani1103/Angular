import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { ProductAdd } from './pages/product-add/product-add';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'product',
    component: Product,
  },
  {
    path: 'product/add',
    component: ProductAdd,
  },
];
