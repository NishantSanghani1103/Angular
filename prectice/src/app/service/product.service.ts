import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   products = signal([
    {
      id: '1',
      name: 'mobile',
      category: 'electronics',
    },
    {
      id: '2',
      name: 'leptop',
      category: 'electronics',
    },
    {
      id: '3',
      name: 'cloaths',
      category: 'men',
    },
    {
      id: '4',
      name: 'jewellery',
      category: 'woemn',
    },
  ]);
}
