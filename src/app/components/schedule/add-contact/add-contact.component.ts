import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact: Contact;


  constructor() {
    this.contact = {
      'name': '',
      'surname': '',
      'description': '',
      'sex': '',
      'email': '',
      'telephone': '',
      'company': ''
    }
   }

  ngOnInit() {
  }

}
