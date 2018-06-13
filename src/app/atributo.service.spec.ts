import { TestBed, inject } from '@angular/core/testing';

import { AtributoService } from './atributo.service';

describe('AtributoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtributoService]
    });
  });

  it('should be created', inject([AtributoService], (service: AtributoService) => {
    expect(service).toBeTruthy();
  }));
});
