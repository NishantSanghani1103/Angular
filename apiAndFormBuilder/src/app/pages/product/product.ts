import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { NgClass } from '@angular/common';
import { ProductMdel } from '../../model/product.model/product.model';


@Component({
  selector: 'app-product',
  imports: [NgClass],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() item!: ProductMdel;
}
