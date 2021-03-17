import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<any> {
    return this.http.get("http://localhost:8080/contact");

  }

  public createContact(contact: { id: any; name: any; description: any; email: any; }): Observable<any> {
    return this.http.post("http://localhost:8080/contact", contact);
  }

}
