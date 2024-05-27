import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcourDeStageComponent } from './parcour-de-stage.component';

describe('ParcourDeStageComponent', () => {
  let component: ParcourDeStageComponent;
  let fixture: ComponentFixture<ParcourDeStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcourDeStageComponent]
    });
    fixture = TestBed.createComponent(ParcourDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
