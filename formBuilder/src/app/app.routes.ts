import { Routes } from '@angular/router';
import { FormBuilderDemo } from './pages/form-builder-demo/form-builder-demo';
import { FormBuilderAllType } from './pages/form-builder-all-type/form-builder-all-type';

export const routes: Routes = [
  {
    path: 'from-demo',
    component: FormBuilderDemo,
  },
  {
    path: 'form-allField',
    component: FormBuilderAllType,
  },
];
