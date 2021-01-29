import { TestBed, inject } from '@angular/core/testing';

import { TaxCodesService } from './tax-codes.service';

describe('TaxCodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxCodesService]
    });
  });

  it('should be created', inject([TaxCodesService], (service: TaxCodesService) => {
    expect(service).toBeTruthy();
  }));
});
