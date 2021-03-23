import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<any> {
    return this.http.get(`${environment.url}/contact`);

  }

  public deletaContacts(id): Observable<any> {
    return this.http.delete(`${environment.url}/contact/${id}`);

  }

  public createContact(contact: { id: any; name: any; description: any; email: any; }): Observable<any> {
    return this.http.post(`${environment.url}/contact`, contact);
  }

}
