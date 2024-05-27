import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierComponent } from './publier.component';

describe('PublierComponent', () => {
  let component: PublierComponent;
  let fixture: ComponentFixture<PublierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublierComponent]
    });
    fixture = TestBed.createComponent(PublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
