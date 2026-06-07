import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, Header]
})
export class App {
  protected readonly title = signal('routing');
}
