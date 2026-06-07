import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Profile } from './pages/profile/profile';
import { Products } from './pages/products/products';
import { ProductsQuery } from './pages/products-query/products-query';
import { ProductRoutes } from './pages/product-routes/product-routes';
import { User } from './pages/user/user';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'product-query',
    component: ProductsQuery,
  },
  {
    path: 'product-routes/:name',
    component: ProductRoutes,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path:"user/:name",
    component:UserDetails
  },
  {
    path: '**',
    component: PageNotFound,
  },
  //   {
  //     path: '**',
  //     redirectTo: '',
  //   },
];
