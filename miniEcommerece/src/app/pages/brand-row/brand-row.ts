import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brands } from '../../models/brandModel';

@Component({
  selector: 'app-brand-row',
  imports: [],
  templateUrl: './brand-row.html',
  styleUrl: './brand-row.css',
})
export class BrandRow {
  @Input() brandsData!: Brands;
  @Output() brandsChangedValue = new EventEmitter<Event>();

  brandsChange(event: Event) {
    this.brandsChangedValue.emit(event);
  }
}
