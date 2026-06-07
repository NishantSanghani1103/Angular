import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface productType {
  id: string;
  name: string;
  category: string;
}
@Component({
  selector: 'app-products-query',
  imports: [],
  templateUrl: './products-query.html',
  styleUrl: './products-query.css',
})
export class ProductsQuery {
  constructor(public route: ActivatedRoute) {}
  productData = signal<productType>({
    id: '',
    name: '',
    category: '',
  });
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.productData.set({
        id: params['id'] || '',
        name: params['name'] || '',
        category: params['category'] || '',
      });
    });
  }
}
