import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:any;
  selectedContact:any;
  edicao = false;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.listar();
  }

  public listar(){
    this.dataService.getContacts().subscribe(resposta => {
      this.contacts = resposta;
    });
  }

  public selectContact(contact: any) {
    this.selectedContact = contact;
  }

  public deleteContact(contact: any) {
    this.dataService.deleteContacts(contact.id).subscribe(r => {
      this.listar();
    });
  }

  public editar(){
    this.edicao = true;
  }

  public cancelar(){
    this.edicao = false;
  }

  public salvar(){
    this.dataService.saveContact(this.selectedContact).subscribe(r => {
      this.edicao = false;
      this.listar();
    });
  }

}
