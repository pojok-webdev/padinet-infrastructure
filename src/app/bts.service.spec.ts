import { TestBed, inject } from '@angular/core/testing';

import { BtsService } from './bts.service';

describe('BtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtsService]
    });
  });

  it('should be created', inject([BtsService], (service: BtsService) => {
    expect(service).toBeTruthy();
  }));
});
