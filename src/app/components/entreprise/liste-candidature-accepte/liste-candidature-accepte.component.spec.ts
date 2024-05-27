import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidatureAccepteComponent } from './liste-candidature-accepte.component';

describe('ListeCandidatureAccepteComponent', () => {
  let component: ListeCandidatureAccepteComponent;
  let fixture: ComponentFixture<ListeCandidatureAccepteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCandidatureAccepteComponent]
    });
    fixture = TestBed.createComponent(ListeCandidatureAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
