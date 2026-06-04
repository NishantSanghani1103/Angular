import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  user = signal(['nishant', 'ram', 'karan']);

  userDetails = signal([
    { id: 1, name: 'nishant', email: 'ns@gmail.com' },
    { id: 2, name: 'karan', email: 'karan@gmail.com' },
    { id: 3, name: 'ram', email: 'ram@gmail.com' },
  ]);
}
