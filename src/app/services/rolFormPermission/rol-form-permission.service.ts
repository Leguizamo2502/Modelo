
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { rolFormPermission, rolFormPermissionCreate } from '../../models/rolFormPermission/rolFormPermission.model';

@Injectable({
  providedIn: 'root'
})
export class rolFormPermissionService {

  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/rolFormPermission';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getRolFormPermission(): Observable<rolFormPermission[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<rolFormPermission[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<rolFormPermission> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<rolFormPermission>(`${this.URLbase}/${id}`, { headers });
  }

  public create(rolFormPermissions: rolFormPermissionCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, rolFormPermissions, { headers });
  }

  public update(id: number, rolFormPermissions: rolFormPermissionCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, rolFormPermissions, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, rolFormPermissions: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, rolFormPermissions, {
      headers,
    });
  }

  public restoreLogic(id: number, rolFormPermissions: []) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
      return this.http.patch(`${this.URLbase}/logical-restore/${id}`, rolFormPermissions, {
        headers,
      });
    }
  
   
  
    public getDeletesRolFormPermission(): Observable<rolFormPermission[]> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
  
      return this.http.get<rolFormPermission[]>(`${this.URLbase}/getDelete`, { headers });
    }

}
