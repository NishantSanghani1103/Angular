import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../component/header/header';
import { Fotter } from '../../component/fotter/fotter';

@Component({
  selector: 'app-routing-prectice',
  imports: [RouterOutlet, Header, Fotter],
  templateUrl: './routing-prectice.html',
  styleUrl: './routing-prectice.css',
})
export class RoutingPrectice {}
