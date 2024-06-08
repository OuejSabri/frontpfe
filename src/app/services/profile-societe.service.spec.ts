import { TestBed } from '@angular/core/testing';

import { ProfileSocieteService } from './profile-societe.service';

describe('ProfileSocieteService', () => {
  let service: ProfileSocieteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSocieteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
