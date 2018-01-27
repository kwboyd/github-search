import { TestBed, inject } from '@angular/core/testing';

import { RepocolorService } from './repocolor.service';

describe('RepocolorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepocolorService]
    });
  });

  it('should be created', inject([RepocolorService], (service: RepocolorService) => {
    expect(service).toBeTruthy();
  }));
});
