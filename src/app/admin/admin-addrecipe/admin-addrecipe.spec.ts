import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddrecipe } from './admin-addrecipe';

describe('AdminAddrecipe', () => {
  let component: AdminAddrecipe;
  let fixture: ComponentFixture<AdminAddrecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddrecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddrecipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
