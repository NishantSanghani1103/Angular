import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRow } from './brand-row';

describe('BrandRow', () => {
  let component: BrandRow;
  let fixture: ComponentFixture<BrandRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandRow],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
