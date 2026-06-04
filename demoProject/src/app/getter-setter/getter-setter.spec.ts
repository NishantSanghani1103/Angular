import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterSetter } from './getter-setter';

describe('GetterSetter', () => {
  let component: GetterSetter;
  let fixture: ComponentFixture<GetterSetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterSetter],
    }).compileComponents();

    fixture = TestBed.createComponent(GetterSetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
