import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSocieteComponent } from './profil-societe.component';

describe('ProfilSocieteComponent', () => {
  let component: ProfilSocieteComponent;
  let fixture: ComponentFixture<ProfilSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilSocieteComponent]
    });
    fixture = TestBed.createComponent(ProfilSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
