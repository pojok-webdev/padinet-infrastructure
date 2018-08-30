import { TestBed, inject } from '@angular/core/testing';

import { AppvarService } from './appvar.service';

describe('AppvarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppvarService]
    });
  });

  it('should be created', inject([AppvarService], (service: AppvarService) => {
    expect(service).toBeTruthy();
  }));
});
