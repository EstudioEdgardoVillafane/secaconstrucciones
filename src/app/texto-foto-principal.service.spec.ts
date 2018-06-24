import { TestBed, inject } from '@angular/core/testing';

import { TextoFotoPrincipalService } from './texto-foto-principal.service';

describe('TextoFotoPrincipalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextoFotoPrincipalService]
    });
  });

  it('should be created', inject([TextoFotoPrincipalService], (service: TextoFotoPrincipalService) => {
    expect(service).toBeTruthy();
  }));
});
