import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalUiWork } from './conditional-ui-work';

describe('ConditionalUiWork', () => {
  let component: ConditionalUiWork;
  let fixture: ComponentFixture<ConditionalUiWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalUiWork],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalUiWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
