import { Component, Input } from '@angular/core';
import Pizza from '../model/pizza.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  @Input() pizza: Pizza;
  @Input() selected: boolean = false;
  isHidden: boolean = false;
  lang: string = 'fr';

  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang;
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.lang = event.lang);
  }

  hidePrice(event: Event): void {
    event.stopPropagation();
    this.isHidden = !this.isHidden;
  }

}
