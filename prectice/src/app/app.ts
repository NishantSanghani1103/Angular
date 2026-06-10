import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyBinding } from './property-binding/property-binding';
import { Signals } from './signals/signals';
import { CounterDisplay } from './counter-display/counter-display';
import { CounterController } from './counter-controller/counter-controller';
import { ParentComponent } from './parent-component/parent-component';
import { FromData } from './from-data/from-data';
import { ConditionalCss } from './conditional-css/conditional-css';
import { RoutingPrectice } from './pages/routing-prectice/routing-prectice';
import { FormBuilderDemo } from './form-builder-demo/form-builder-demo';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PropertyBinding,
    Signals,
    CounterDisplay,
    CounterController,
    ParentComponent,
    FromData,
    ConditionalCss,
    RoutingPrectice,
    FormBuilderDemo,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('prectice');
}
