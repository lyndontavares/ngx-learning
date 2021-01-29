import { TestBed, inject } from '@angular/core/testing';

import { Window.ServiceService } from './window.service.service';

describe('Window.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Window.ServiceService]
    });
  });

  it('should be created', inject([Window.ServiceService], (service: Window.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
