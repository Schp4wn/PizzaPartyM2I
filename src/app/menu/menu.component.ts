import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../model/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AngularFireAuth]
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = false;
  @Input() title: string;
  @Output() menuChange: EventEmitter<any> = new EventEmitter();
  user = new User();

  constructor(
    private router: Router,
    private translate: TranslateService,
    private af: AngularFireAuth
  ) { }

  ngOnInit() {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.user = new User();
        this.user.email = this.user.login = auth.email;
      } else {
        this.user = null;
      }
    })
  }

  logout() {
    this.af.auth.signOut().then(success => console.log(success));
  }

  changeRoute(route: string, title: string) {
    this.router.navigate([route]);
    this.menuChange.emit(title);
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  } 

}
