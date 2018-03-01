import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import { PizzaApiService } from '../service/pizza-api.service';
import Pizza from '../model/pizza.model';
import { Subject } from 'rxjs/Subject';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  observable = Observable
    .interval(300)
    .map(number => number * 2)
    .take(9);

  observable2 = new Observable((observer) => {
    setTimeout(() => observer.next(4), 1000);
    setTimeout(() => observer.next(8), 2000);
    setTimeout(() => observer.next(16), 3000);
    setTimeout(() => observer.next(32), 4000);
    setTimeout(() => observer.next(64), 5000);
    setTimeout(() => observer.complete(), 10000);
  });

  pizzas: Pizza[];
  search = new Subject();

  constructor(private api: PizzaApiService) { }

  ngOnInit() {
    this.observable.subscribe(observer => console.log(observer));

    this.search.pipe(
      debounceTime(500),
      switchMap((searchTerm: string) => this.api.searchPizza(searchTerm))
    ).subscribe(
      pizzas => this.pizzas = pizzas
    );
  }

  runSearch(value: string) {
    this.search.next(value);
  }

}
