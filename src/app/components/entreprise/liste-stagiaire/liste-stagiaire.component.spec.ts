import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStagiaireComponent } from './liste-stagiaire.component';

describe('ListeStagiaireComponent', () => {
  let component: ListeStagiaireComponent;
  let fixture: ComponentFixture<ListeStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeStagiaireComponent]
    });
    fixture = TestBed.createComponent(ListeStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
