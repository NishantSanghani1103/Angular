import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductListing } from './pages/product-listing/product-listing';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
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
    path: 'login',
    component:Login
  },
];
