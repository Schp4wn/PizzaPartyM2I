import { Component, OnInit } from '@angular/core';
import { PizzaApiService } from '../service/pizza-api.service';
import { ActivatedRoute } from '@angular/router';
import Pizza from '../model/pizza.model';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.css']
})
export class PizzaSingleComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private pizzaService: PizzaApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    /*let id = parseInt(this.route.snapshot.params.id || 0) || 0;
    if (id) {
      this.pizzaService.getPizza(id).subscribe(pizza => this.pizza = pizza);
    }*/

    this.route.params.switchMap(params => {
      let id = parseInt(params['id'] || 0) || 0;
      return this.pizzaService.getPizza(id);
    }).subscribe(pizza => {
      console.log(pizza);
      this.pizza = pizza;
    });
    console.log(this.route.snapshot.params.id);
  }

}
