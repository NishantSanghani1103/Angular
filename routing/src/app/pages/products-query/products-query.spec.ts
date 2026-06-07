import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQuery } from './products-query';

describe('ProductsQuery', () => {
  let component: ProductsQuery;
  let fixture: ComponentFixture<ProductsQuery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsQuery],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsQuery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
