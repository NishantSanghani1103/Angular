import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromData } from './from-data';

describe('FromData', () => {
  let component: FromData;
  let fixture: ComponentFixture<FromData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromData],
    }).compileComponents();

    fixture = TestBed.createComponent(FromData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
