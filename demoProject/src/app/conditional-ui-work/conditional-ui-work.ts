import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-conditional-ui-work',
  imports: [],
  templateUrl: './conditional-ui-work.html',
  styleUrl: './conditional-ui-work.css',
})
export class ConditionalUiWork {
  status = signal('pending');
  handleStatus(event: any) {
    this.status.set(event.target.value);
  }
}
