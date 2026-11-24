import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Clientes } from './clientes';

describe('Clientes', () => {
  let service: Clientes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(Clientes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
