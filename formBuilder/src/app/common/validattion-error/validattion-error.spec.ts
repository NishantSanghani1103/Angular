import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidattionError } from './validattion-error';

describe('ValidattionError', () => {
  let component: ValidattionError;
  let fixture: ComponentFixture<ValidattionError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidattionError],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidattionError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
