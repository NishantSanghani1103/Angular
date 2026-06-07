import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterController } from './counter-controller';

describe('CounterController', () => {
  let component: CounterController;
  let fixture: ComponentFixture<CounterController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterController],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
