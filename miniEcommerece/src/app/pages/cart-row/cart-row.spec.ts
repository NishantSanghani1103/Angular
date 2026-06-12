import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRow } from './cart-row';

describe('CartRow', () => {
  let component: CartRow;
  let fixture: ComponentFixture<CartRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartRow],
    }).compileComponents();

    fixture = TestBed.createComponent(CartRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
