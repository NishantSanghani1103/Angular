import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRow } from './category-row';

describe('CategoryRow', () => {
  let component: CategoryRow;
  let fixture: ComponentFixture<CategoryRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryRow],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
