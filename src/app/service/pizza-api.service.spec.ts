import { TestBed, inject } from '@angular/core/testing';

import { PizzaApiService } from './pizza-api.service';

describe('PizzaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaApiService]
    });
  });

  it('should be created', inject([PizzaApiService], (service: PizzaApiService) => {
    expect(service).toBeTruthy();
  }));
});
