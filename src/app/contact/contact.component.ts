import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = new Contact();
  contactForm: FormGroup;
  subjectCtrl: FormControl;
  emailCtrl: FormControl;
  messageCtrl: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.subjectCtrl = this.fb.control(
      this.contact.subject,
      [Validators.required]
    );
    this.emailCtrl = this.fb.control(
      this.contact.email,
      [Validators.required, Validators.email]
    );
    this.messageCtrl = this.fb.control(
      this.contact.message,
      [Validators.required, Validators.minLength(10)]
    );

    this.contactForm = this.fb.group({
      subject: this.subjectCtrl,
      email: this.emailCtrl,
      message: this.messageCtrl
    });
  }

  send() {
    this.contact = this.contactForm.value;
    console.log(this.contact);
  }

}
