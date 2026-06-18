import { Routes } from '@angular/router';
import { Login } from './pages/auth/pages/login/login';
import { Register } from './pages/auth/pages/register/register';
import { Home } from './pages/home/pages/home/home';
import { Product } from './pages/products/pages/product/product';
import { ProductDetails } from './pages/product-details/product-details/product-details';
import { Cart } from './pages/cart/cart/cart';
import { Order } from './pages/order/order/order';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'product',
    component: Product,
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
    path: 'order',
    component:Order
  },
];
