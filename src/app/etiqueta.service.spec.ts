import { TestBed, inject } from '@angular/core/testing';

import { EtiquetaService } from './etiqueta.service';

describe('EtiquetaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtiquetaService]
    });
  });

  it('should be created', inject([EtiquetaService], (service: EtiquetaService) => {
    expect(service).toBeTruthy();
  }));
});
