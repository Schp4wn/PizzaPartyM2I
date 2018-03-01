import { InMemoryDbService } from "angular-in-memory-web-api";
import Pizza from "../model/pizza.model";

export class FakeApi implements InMemoryDbService {
    createDb() {
        let pizzas: Pizza[] = [
            {id: 1, name: '4 fromages', price: 9.99},
            {id: 2, name: 'Reine', price: 12},
            {id: 3, name: 'Orientale', price: 14},
            {id: 4, name: 'Cannibale', price: 8},
            {id: 5, name: 'Extravaganzza', price: 7},
            {id: 6, name: 'Savoyarde', price: 11},
            {id: 7, name: 'Hypnotika', price: 9.50},
            {id: 8, name: 'Chickenita Pepperoni', price: 10},
            {id: 9, name: 'Forestiere', price: 11}
        ];

        return {pizzas};
    }
}