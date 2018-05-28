import { TestBed, inject } from '@angular/core/testing';

import { BackendClienteService } from './backend-cliente.service';

describe('BackendClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendClienteService]
    });
  });

  it('should be created', inject([BackendClienteService], (service: BackendClienteService) => {
    expect(service).toBeTruthy();
  }));
});
