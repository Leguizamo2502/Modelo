
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { rol, rolCreate } from '../../models/rol/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolServiceService {

  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/rol';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getRol(): Observable<rol[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<rol[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<rol> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<rol>(`${this.URLbase}/${id}`, { headers });
  }

  public create(rols: rolCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, rols, { headers });
  }

  public update(id: number, rols: rolCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, rols, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, rols: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, rols, {
      headers,
    });
  }

  public restoreLogic(id: number, rols:[]) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
      return this.http.patch(`${this.URLbase}/logical-restore/${id}`, rols, {
        headers,
      });
    }
  
   
  
    public getDeletesRol(): Observable<rol[]> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
  
      return this.http.get<rol[]>(`${this.URLbase}/getDelete`, { headers });
    }


}
