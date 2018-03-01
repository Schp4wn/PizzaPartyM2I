import { Hamburger } from './hamburger';
import { PizzaApiService } from '../service/pizza-api.service';
import Pizza from '../model/pizza.model';
import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/*fdescribe('Mon premier test', () => {
  let bigMac;

  beforeEach(() => {
    bigMac = new Hamburger('Big Mac', 2);
  });

  it('instancier une classe', () => {
    expect(bigMac).toBeTruthy();
  });

  it('getter du name', () => {
    expect(bigMac.name).toBe('Big Mac');
  });
});*/

describe('Test DI Angular', () => {
  it('instancier le service', () => {
    /*TestBed.configureTestingModule({
      providers: [PizzaApiService, HttpClient],
      imports: [HttpClientModule]
    });
    const PizzaService = TestBed.get(PizzaApiService);
    expect(PizzaService.getPizzas()).toEqual([]);*/
  });

  it('instancier le service avec un mock', () => {
    const FakeHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    FakeHttpClient.get.and.returnValue(['toto', 'titi']);

    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: FakeHttpClient},
        // {provide: PizzaApiService, useClass: PizzaApiService}
        PizzaApiService
      ],
    });
    const PizzaService = TestBed.get(PizzaApiService);
    expect(PizzaService.getPizzas()).toEqual(['toto', 'titi']);
    expect(FakeHttpClient.get).toHaveBeenCalledTimes(1);
    expect(FakeHttpClient.get).toHaveBeenCalledWith('api/pizzas');
  });
});
