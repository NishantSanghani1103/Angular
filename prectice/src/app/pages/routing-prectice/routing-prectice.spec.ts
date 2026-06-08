import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPrectice } from './routing-prectice';

describe('RoutingPrectice', () => {
  let component: RoutingPrectice;
  let fixture: ComponentFixture<RoutingPrectice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingPrectice],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingPrectice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
