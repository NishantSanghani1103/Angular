import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlert } from './delete-alert';

describe('DeleteAlert', () => {
  let component: DeleteAlert;
  let fixture: ComponentFixture<DeleteAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
