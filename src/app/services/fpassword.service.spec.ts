import { TestBed } from '@angular/core/testing';

import { FpasswordService } from './fpassword.service';

describe('FpasswordService', () => {
  let service: FpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
