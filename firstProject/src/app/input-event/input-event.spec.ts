import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEvent } from './input-event';

describe('InputEvent', () => {
  let component: InputEvent;
  let fixture: ComponentFixture<InputEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
