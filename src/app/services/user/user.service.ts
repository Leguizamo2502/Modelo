import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { user, userCreate } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/user';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getUser(): Observable<user[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<user[]>(this.URLbase, { headers });
  }

  public getId(id: number): Observable<user> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<user>(`${this.URLbase}/${id}`, { headers });
  }

  public create(users: userCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, users, { headers });
  }

  public update(id: number, users: userCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, users, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, users: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, users, {
      headers,
    });
  }

  public restoreLogic(id: number, users: []) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
      return this.http.patch(`${this.URLbase}/logical-restore/${id}`, users, {
        headers,
      });
    }
  
   
  
    public getDeletesUser(): Observable<user[]> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
  
      return this.http.get<user[]>(`${this.URLbase}/getDelete`, { headers });
    }
}
