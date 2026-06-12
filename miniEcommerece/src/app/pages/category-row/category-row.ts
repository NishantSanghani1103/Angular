import { Component, effect, EventEmitter, Input, Output, signal } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-row',
  imports: [],
  templateUrl: './category-row.html',
  styleUrl: './category-row.css',
})
export class CategoryRow {
  @Input() categoryData!: Category;
  @Output() categoryChangedValue = new EventEmitter<Event>();

  categoryChange(event: Event) {
    this.categoryChangedValue.emit(event);
  }
}
