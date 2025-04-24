import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { module, moduleCreate } from '../../models/module/module.model';

@Injectable({
  providedIn: 'root',
})
export class ModuleServiceService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/module';

  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado

  public getModule(): Observable<module[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<module[]>(this.URLbase, { headers });
  }

  public getDeletesModule(): Observable<module[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<module[]>(`${this.URLbase}/getDelete`, { headers });
  }

  public getId(id: number): Observable<module> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<module>(`${this.URLbase}/${id}`, { headers });
  }

  public create(modules: moduleCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(this.URLbase, modules, { headers });
  }

  public update(id: number, modules: moduleCreate) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(`${this.URLbase}/${id}`, modules, { headers });
  }

  public delete(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete(`${this.URLbase}/${id}`, { headers });
  }

  public deleteLogic(id: number, modules: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-delete/${id}`, modules, {
      headers,
    });
  }

  public restoreLogic(id: number, modules: []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch(`${this.URLbase}/logical-restore/${id}`, modules, {
      headers,
    });
  }
}
