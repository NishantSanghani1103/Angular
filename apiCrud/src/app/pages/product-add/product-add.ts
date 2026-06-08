import { Component, effect, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ProductService } from '../../service/product.service';
import { Product } from '../../service/productType';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-add',
  imports: [FormField, RouterLink],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  productModel = signal<Product>({
    title: '',
    description: '',
    category: '',
    brand: '',
    price: 0,
    stock: 0,
    rating: 0,
    thumbnail: '',
  });
  IsId = signal(false);
  constructor(
    private productService: ProductService,
    private router: Router,
    public paramRoutes: ActivatedRoute,
  ) {
    effect(() => {
      console.log(this.IsId());
    });
  }

  productForm = form(this.productModel);

  productData(event: SubmitEvent) {
    event.preventDefault();
    const data = this.productForm().value();
    const id = this.paramRoutes.snapshot.params['id'];
    if (id) {
      this.productService.productEditService(id, data).subscribe((res) => {
        if (res) {
          this.router.navigate(['/']);
        }
      });
    } else {
      this.productService.productAddService(data).subscribe((data) => {
        console.log(data);
      });
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.paramRoutes.params.subscribe((params) => {
      const { id } = params;
      const data = this.productForm().value();
      if (id) {
        this.IsId.set(true);
        this.productService.productSingleViewService(id).subscribe((res) => {
          console.log(res);
          const { title, description, category, brand, price, stock, rating, thumbnail } = res;
          this.productModel.set({
            title: title,
            description,
            category,
            brand,
            price,
            stock,
            rating,
            thumbnail,
          });
        });
      }
    });
  }
}
