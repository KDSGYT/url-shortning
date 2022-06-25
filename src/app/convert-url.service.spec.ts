import { TestBed } from '@angular/core/testing';

import { ConvertUrlService } from './convert-url.service';

describe('ConvertUrlService', () => {
  let service: ConvertUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
