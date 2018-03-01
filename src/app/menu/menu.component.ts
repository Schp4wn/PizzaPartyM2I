import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = false;
  @Input() title: string;
  @Output() menuChange: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeRoute(route: string, title: string) {
    this.router.navigate([route]);
    this.menuChange.emit(title);
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
