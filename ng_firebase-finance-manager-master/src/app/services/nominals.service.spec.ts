import { TestBed, inject } from '@angular/core/testing';

import { NominalsService } from './nominals.service';

describe('NominalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NominalsService]
    });
  });

  it('should be created', inject([NominalsService], (service: NominalsService) => {
    expect(service).toBeTruthy();
  }));
});
