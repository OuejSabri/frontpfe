import { TestBed } from '@angular/core/testing';

import { SocieteInterceptor } from './societe.interceptor';

describe('SocieteInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SocieteInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SocieteInterceptor = TestBed.inject(SocieteInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
