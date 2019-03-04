import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, AuthCredentials } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(authCredentials: AuthCredentials): Observable<User> {
    return this.http.post<User>('http://127.0.0.1:3000/login', authCredentials);
  }
}
