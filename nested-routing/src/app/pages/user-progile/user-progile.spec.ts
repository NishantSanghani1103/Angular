import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProgile } from './user-progile';

describe('UserProgile', () => {
  let component: UserProgile;
  let fixture: ComponentFixture<UserProgile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProgile],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProgile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
