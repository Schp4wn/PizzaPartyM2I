import { Injectable } from '@angular/core';
import Pizza from '../model/pizza.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class PizzaApiService {
  url: string;

  constructor(private http: HttpClient) { }

  getPizzas(): any {
    return this.http.get('api/pizzas');
  }

  /*getPizzasSlow(): Promise<Pizza[]> {
    return new Promise(resolve => setTimeout(() => resolve(this.getPizzas()), 5000));
  }*/

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`api/pizzas/${id}`);
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`api/pizzas`, pizza);
  }

  deletePizza(id: number): Observable<Pizza> {
    return this.http.delete<Pizza>(`api/pizzas/${id}`);
  }

  searchPizza(search: string): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`api/pizzas/?name=${search}`).pipe(
      tap(() => console.log(`Recherche sur ${search}`))
    );
  }

}
