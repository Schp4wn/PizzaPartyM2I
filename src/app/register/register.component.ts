import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AngularFireAuth]
})
export class RegisterComponent implements OnInit {
  user = new User();

  constructor(private af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.af.auth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    ).then(
      success => {
        console.log(success);
        this.router.navigate(['/']);
      }
    ).catch(
      error => console.log(error)
    );
    console.log(this.user);
  }

}
