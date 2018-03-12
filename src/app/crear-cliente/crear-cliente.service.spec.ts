import { TestBed, inject } from '@angular/core/testing';

import { CrearClienteService } from './crear-cliente.service';

describe('CrearClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearClienteService]
    });
  });

  it('should be created', inject([CrearClienteService], (service: CrearClienteService) => {
    expect(service).toBeTruthy();
  }));
});
