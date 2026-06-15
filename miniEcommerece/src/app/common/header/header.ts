import { Component } from '@angular/core';
import { Home } from '../../pages/home/home';
import { ProductListing } from '../../pages/product-listing/product-listing';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    public cart: CartService,
    public auth: AuthService,
  ) {}
}
