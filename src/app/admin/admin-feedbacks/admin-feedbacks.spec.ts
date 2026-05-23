import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedbacks } from './admin-feedbacks';

describe('AdminFeedbacks', () => {
  let component: AdminFeedbacks;
  let fixture: ComponentFixture<AdminFeedbacks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeedbacks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFeedbacks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
