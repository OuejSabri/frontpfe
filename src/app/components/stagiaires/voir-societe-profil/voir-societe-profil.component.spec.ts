import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirSocieteProfilComponent } from './voir-societe-profil.component';

describe('VoirSocieteProfilComponent', () => {
  let component: VoirSocieteProfilComponent;
  let fixture: ComponentFixture<VoirSocieteProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoirSocieteProfilComponent]
    });
    fixture = TestBed.createComponent(VoirSocieteProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
