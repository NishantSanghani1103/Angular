import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyBinding } from './property-binding/property-binding';
import { Signals } from './signals/signals';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Effect } from './effect/effect';
import { CounterApp } from './counter-app/counter-app';
import { ConditionalUiWork } from './conditional-ui-work/conditional-ui-work';
import { ForLoop } from './for-loop/for-loop';
import { GetterSetter } from './getter-setter/getter-setter';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PropertyBinding,
    Signals,
    ComputedSignals,
    Effect,
    CounterApp,
    ConditionalUiWork,
    ForLoop,
    GetterSetter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('demoProject');
}
