import { Component, OnInit } from '@angular/core';
import Pizza from '../model/pizza.model';
import { PizzaApiService } from '../service/pizza-api.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  //styleUrls: ['./pizza-list.component.css'],
  styles: [`
    .col-lg-3 {
      cursor: pointer
    }
    .selected .card {
      background-color: #ccc58f;
    }
  `]
})
export class PizzaListComponent implements OnInit {
  selectedPizza: Pizza;
  pizzas: Pizza[];
  newPizza: Pizza = {id: null, name: null, price: null};

  constructor(
    private api: PizzaApiService
  ) {
    
  }

  ngOnInit() {
    this.api.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.api.getPizza(1).subscribe(pizza => this.selectedPizza = pizza);
  }

  onSelect(pizza: Pizza): void {
    console.log(pizza);
    this.selectedPizza = pizza;
  }

  createPizza(): void {
    let id = 0;

    if (this.pizzas.length > 0) {
      id = this.pizzas[this.pizzas.length - 1].id;
    }

    this.newPizza.id = ++id;
    this.api.createPizza(this.newPizza).subscribe(() => {
      this.pizzas.push(this.newPizza);
      this.newPizza = {id: null, name: null, price: null};
    });
  }

  deletePizza(pizza: Pizza): void {
    this.api.deletePizza(pizza.id).subscribe(() => {
      this.pizzas = this.pizzas.filter((element) => element !== pizza);
    });
  }

  isNewPizzaValid(): boolean {
      return !!this.newPizza.name && !!this.newPizza.price;
  }
}
