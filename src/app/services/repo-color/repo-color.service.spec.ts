import { TestBed, inject } from '@angular/core/testing';

import { RepoColorService } from './repo-color.service';

describe('RepoColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoColorService]
    });
  });

  it('should be created', inject([RepoColorService], (service: RepoColorService) => {
    expect(service).toBeTruthy();
  }));
});
