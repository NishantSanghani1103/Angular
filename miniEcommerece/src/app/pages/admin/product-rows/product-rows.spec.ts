import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRows } from './product-rows';

describe('ProductRows', () => {
  let component: ProductRows;
  let fixture: ComponentFixture<ProductRows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRows],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductRows);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
