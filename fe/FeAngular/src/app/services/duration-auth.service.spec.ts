import { TestBed } from '@angular/core/testing';

import { DurationAuthService } from './duration-auth.service';

describe('DurationAuthService', () => {
  let service: DurationAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DurationAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
