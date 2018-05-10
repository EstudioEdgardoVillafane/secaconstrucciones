import { TestBed, inject } from '@angular/core/testing';

import { SubatributoService } from './subatributo.service';

describe('SubatributoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubatributoService]
    });
  });

  it('should be created', inject([SubatributoService], (service: SubatributoService) => {
    expect(service).toBeTruthy();
  }));
});
