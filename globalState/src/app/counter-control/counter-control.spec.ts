import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterControl } from './counter-control';

describe('CounterControl', () => {
  let component: CounterControl;
  let fixture: ComponentFixture<CounterControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterControl],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
