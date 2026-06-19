import { Component, inject } from '@angular/core';
import { Header } from '../../common/header/header';
import { Footer } from '../../common/footer/footer';
import { RouterOutlet } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  cart = inject(CartService);
  ngOnInit() {
    this.cart.viewCart()
  }
}
