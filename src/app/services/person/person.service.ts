import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { person, personCreate } from '../../models/person/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/person';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getPerson(): Observable<person[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<person[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<person> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<person>(`${this.URLbase}/${id}`, { headers });
  }

  public create(persons: personCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, persons, { headers });
  }

  public update(id: number, persons: personCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, persons, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, persons: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, persons, {
      headers,
    });
  }
  public restoreLogic(id: number, persons: []) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
      return this.http.patch(`${this.URLbase}/logical-restore/${id}`, persons, {
        headers,
      });
    }
  
   
  
    public getDeletesPerson(): Observable<person[]> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
  
      return this.http.get<person[]>(`${this.URLbase}/getDelete`, { headers });
    }
}
