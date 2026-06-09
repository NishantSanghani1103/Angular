import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';


@Component({
  selector: 'app-root',
  imports: [NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [provideIcons({ featherAirplay, heroUsers })]
})
export class App {
  protected readonly title = signal('materiaUi');

}
