import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalCss } from './conditional-css';

describe('ConditionalCss', () => {
  let component: ConditionalCss;
  let fixture: ComponentFixture<ConditionalCss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalCss],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalCss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
