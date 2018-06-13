import { TestBed, inject } from '@angular/core/testing';

import { SubAtributoService } from './sub-atributo.service';

describe('SubAtributoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubAtributoService]
    });
  });

  it('should be created', inject([SubAtributoService], (service: SubAtributoService) => {
    expect(service).toBeTruthy();
  }));
});
