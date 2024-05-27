import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCodeComponent } from './ajouter-code.component';

describe('AjouterCodeComponent', () => {
  let component: AjouterCodeComponent;
  let fixture: ComponentFixture<AjouterCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterCodeComponent]
    });
    fixture = TestBed.createComponent(AjouterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
