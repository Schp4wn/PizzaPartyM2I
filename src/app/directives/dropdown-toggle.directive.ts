import { Directive, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[dropdownToggle]'
})
export class DropdownToggleDirective {
  isOpen: boolean = false;

  constructor(private el: ElementRef) {
    console.log($(this.el.nativeElement).text());
  }

  ngOnInit() {
    console.log($(this.el.nativeElement).text());
  }  

  @HostListener('click', ['$event']) changeState(e: Event) {
    e.preventDefault();
    this.isOpen = !this.isOpen;

    let next = this.el.nativeElement.nextElementSibling;

    if (next.classList.contains('dropdown-menu')) {
      next.classList.remove('show');

      if (this.isOpen) {
        next.classList.add('show');
      }
    }

  }
}
