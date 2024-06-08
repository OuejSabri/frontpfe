import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirStagiaireProfilComponent } from './voir-stagiaire-profil.component';

describe('VoirStagiaireProfilComponent', () => {
  let component: VoirStagiaireProfilComponent;
  let fixture: ComponentFixture<VoirStagiaireProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoirStagiaireProfilComponent]
    });
    fixture = TestBed.createComponent(VoirStagiaireProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
