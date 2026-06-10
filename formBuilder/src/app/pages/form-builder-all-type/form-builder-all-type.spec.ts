import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderAllType } from './form-builder-all-type';

describe('FormBuilderAllType', () => {
  let component: FormBuilderAllType;
  let fixture: ComponentFixture<FormBuilderAllType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderAllType],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBuilderAllType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
