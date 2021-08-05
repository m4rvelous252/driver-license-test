import { TestBed } from '@angular/core/testing';

import { NotAuthenticationService } from './not-authentication.service';

describe('NotAuthenticationService', () => {
  let service: NotAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
