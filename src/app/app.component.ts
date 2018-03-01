import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'PizzaParty';
  observDate: Observable<any> = Observable.interval(1000).map(() => Date.now());
  currentDate: number = Date.now();

  ngOnInit() {
    this.observDate.subscribe((date) => this.currentDate = date);
  }

  changeTitle(title) {
    this.title = title;
  }
}
