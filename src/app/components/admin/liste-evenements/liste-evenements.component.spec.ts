import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEvenementsComponent } from './liste-evenements.component';

describe('ListeEvenementsComponent', () => {
  let component: ListeEvenementsComponent;
  let fixture: ComponentFixture<ListeEvenementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEvenementsComponent]
    });
    fixture = TestBed.createComponent(ListeEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
