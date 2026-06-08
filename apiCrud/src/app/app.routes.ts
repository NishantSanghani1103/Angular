import { Routes } from '@angular/router';
import { ProductDetails } from './pages/product-details/product-details';
import { App } from './app';
import { ProductList } from './pages/product-list/product-list';
import { ProductAdd } from './pages/product-add/product-add';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'product/:id',
    component: ProductDetails,
  },
  {
    path: 'products/add',
    component: ProductAdd,
  },
  {
    path: 'products/edit/:id',
    component: ProductAdd,
  },
];
