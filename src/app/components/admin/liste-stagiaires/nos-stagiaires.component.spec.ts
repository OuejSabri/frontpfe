import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosStagiairesComponent } from './nos-stagiaires.component';

describe('NosStagiairesComponent', () => {
  let component: NosStagiairesComponent;
  let fixture: ComponentFixture<NosStagiairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosStagiairesComponent]
    });
    fixture = TestBed.createComponent(NosStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
