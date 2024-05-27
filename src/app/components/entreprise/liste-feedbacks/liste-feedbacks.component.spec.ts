import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFeedbacksComponent } from './liste-feedbacks.component';

describe('ListeFeedbacksComponent', () => {
  let component: ListeFeedbacksComponent;
  let fixture: ComponentFixture<ListeFeedbacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFeedbacksComponent]
    });
    fixture = TestBed.createComponent(ListeFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
