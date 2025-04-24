import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { form, formCreate } from '../../models/form/form.model';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/form';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getForm(): Observable<form[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<form[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<form> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<form>(`${this.URLbase}/${id}`, { headers });
  }

  public create(forms: formCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, forms, { headers });
  }

  public update(id: number, forms: formCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, forms, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, forms: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, forms, {
      headers,
    });
  }

  public restoreLogic(id: number, forms: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-restore/${id}`, forms, {
      headers,
    });
  }

 

  public getDeletesForm(): Observable<form[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<form[]>(`${this.URLbase}/getDelete`, { headers });
  }

}
