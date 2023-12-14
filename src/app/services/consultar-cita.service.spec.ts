import { TestBed } from '@angular/core/testing';

import { ConsultarCitaService } from './consultar-cita.service';

describe('ConsultarCitaService', () => {
  let service: ConsultarCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
