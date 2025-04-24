import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  userName: string;
  role: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl;

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.URLbase}/Auth/login`, credentials);
  }

}
