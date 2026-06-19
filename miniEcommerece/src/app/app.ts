import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './common/header/header';
import { Footer } from './common/footer/footer';
import { MainLayout } from './layout/main-layout/main-layout';
import { Loader } from './common/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Loader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('miniEcommerece');
}
