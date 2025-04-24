import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  permission,
  permissionCreate,
} from '../../models/permission/permission.model';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/permission';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getPermission(): Observable<permission[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<permission[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<permission> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<permission>(`${this.URLbase}/${id}`, { headers });
  }

  public create(permissions: permissionCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, permissions, { headers });
  }

  public update(id: number, permissions: permissionCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, permissions, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, permissions: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, permissions, {
      headers,
    });
  }

  public restoreLogic(id: number, permissions: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-restore/${id}`, permissions, {
      headers,
    });
  }

  public getDeletesPermission(): Observable<permission[]> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
  
      return this.http.get<permission[]>(`${this.URLbase}/getDelete`, { headers });
    }
}
