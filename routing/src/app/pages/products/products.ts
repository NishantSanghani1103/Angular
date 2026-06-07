import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  constructor(public router: Router) {}

  productList = signal({
    id: 1,
    name: 'iPhone17',
    category: 'apple',
  });

  productParams() {
    this.router.navigate(['product-query'], {
      queryParams: {
        id: '3',
        name: 'Samsung',
        category: 'Mobile',
      },
    });
  }

  productRoutes(){
    this.router.navigate(['product-routes','Sanghani'])
  }
}
