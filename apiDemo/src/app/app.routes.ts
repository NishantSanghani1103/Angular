import { Routes } from '@angular/router';

import { Product } from './pages/product/product';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
  {
    path: 'product',
    component: Product,
  },
  {
    path:"product/:id",
    component:ProductDetails
  }
];
