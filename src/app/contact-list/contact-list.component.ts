import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any;
  selectedContact: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getContacts().subscribe(resposta => {
      this.contacts = resposta;
    });
  }

  public selectContact(contacts: any) {
    this.selectedContact = contacts;
  }

}
