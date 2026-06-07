import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRoutes } from './product-routes';

describe('ProductRoutes', () => {
  let component: ProductRoutes;
  let fixture: ComponentFixture<ProductRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRoutes],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductRoutes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
