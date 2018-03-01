import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bg]'
})
export class BackgroundDirective implements OnInit {
  nativeElement: HTMLElement;
  @Input('bg') color: string = 'yellow';

  constructor(private element: ElementRef) {
    console.log(this.color);
  }

  ngOnInit() {
    console.log(this.color);
    this.nativeElement = this.element.nativeElement;
    this.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('click') onClick() {
    console.log(this.nativeElement.textContent);
  }

}
