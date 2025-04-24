import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { formModule, formModuleCreate } from '../../models/formModule/formModule.model';

@Injectable({
  providedIn: 'root'
})
export class FormModuleService {

  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/formModule';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getFormModule(): Observable<formModule[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<formModule[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<formModule> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<formModule>(`${this.URLbase}/${id}`, { headers });
  }

  public create(formModules: formModuleCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, formModules, { headers });
  }

  public update(id: number, formModules: formModuleCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, formModules, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, formModules: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, formModules, {
      headers,
    });
  }
 public restoreLogic(id: number, formModules: []) {
     const headers = new HttpHeaders({
       Authorization: `Bearer ${this.token}`,
     });
     return this.http.patch(`${this.URLbase}/logical-restore/${id}`, formModules, {
       headers,
     });
   }
 
  
 
   public getDeletesFormModule(): Observable<formModule[]> {
     const headers = new HttpHeaders({
       Authorization: `Bearer ${this.token}`,
     });
 
     return this.http.get<formModule[]>(`${this.URLbase}/getDelete`, { headers });
   }

}
