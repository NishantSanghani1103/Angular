import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-routes',
  imports: [],
  templateUrl: './product-routes.html',
  styleUrl: './product-routes.css',
})
export class ProductRoutes {
  constructor(public route: ActivatedRoute) {}

  paramsValue = signal('');

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const {name} = params;   
      this.paramsValue.set(name);
      console.log(params);
    });
  }
}
