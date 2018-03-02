import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  login = {email: null, password: null};

  constructor(
    private af: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.af.authState.subscribe(auth => {
      console.log('observable :', auth);
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  logUser() {
    this.af.auth.signInWithEmailAndPassword(
      this.login.email,
      this.login.password
    ).then(
      success => {
        console.log('login : ', success);
      }
    ).catch(
      error => console.log(error)
    );
  } 

}
