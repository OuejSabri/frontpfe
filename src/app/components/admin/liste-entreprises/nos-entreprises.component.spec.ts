import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosEntreprisesComponent } from './nos-entreprises.component';

describe('NosEntreprisesComponent', () => {
  let component: NosEntreprisesComponent;
  let fixture: ComponentFixture<NosEntreprisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosEntreprisesComponent]
    });
    fixture = TestBed.createComponent(NosEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
