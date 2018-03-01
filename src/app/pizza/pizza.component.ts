import { Component, Input } from '@angular/core';
import Pizza from '../model/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  @Input() pizza: Pizza;
  @Input() selected: boolean = false;
  isHidden: boolean = false;

  constructor() {
    
  }

  hidePrice(event: Event): void {
    event.stopPropagation();
    this.isHidden = !this.isHidden;
  }

}
