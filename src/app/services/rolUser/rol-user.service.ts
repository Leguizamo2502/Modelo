import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { rolUser, rolUserCreate } from '../../models/rolUser/rolUser.model';

@Injectable({
  providedIn: 'root'
})
export class RolUserService {

  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/rolUser';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getRolUser(): Observable<rolUser[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<rolUser[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<rolUser> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<rolUser>(`${this.URLbase}/${id}`, { headers });
  }

  public create(rolUsers: rolUserCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, rolUsers, { headers });
  }

  public update(id: number, rolUsers: rolUserCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, rolUsers, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, rolUsers: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, rolUsers, {
      headers,
    });
  }


  public restoreLogic(id: number, rolUsers: []) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
      return this.http.patch(`${this.URLbase}/logical-restore/${id}`, rolUsers, {
        headers,
      });
    }
  
   
  
    public getDeletesRolUser(): Observable<rolUser[]> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
  
      return this.http.get<rolUser[]>(`${this.URLbase}/getDelete`, { headers });
    }
  
}
