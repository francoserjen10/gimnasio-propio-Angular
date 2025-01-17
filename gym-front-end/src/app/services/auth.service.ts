import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { CommonService } from './common.service';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService: CommonService, private http: HttpClient) { }

  loggin(email: string, password: string): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      `${this.commonService.apiUrl}/login/access`,
      { email, password },
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        withCredentials: true
      }
    );
  }

  getRolesOfToken(): Observable<number | null> {
    return this.http.get<{ rolId: number } | null>(`${this.commonService.apiUrl}/login/user-role`,
      {
        withCredentials: true
      }
    ).pipe(
      map(response => response?.rolId ?? null)
    );
  }

  getAllUserService(): Observable<User[]> {
    return this.http.get<User[]>(`${this.commonService.apiUrl}/register`);
  }

  createUserService(user: User): Observable<User> {
    const result = this.http.post<User>(`${this.commonService.apiUrl}/register/create-user`, user, {
      headers: { 'Content-Type': 'application/json' }
    })
    return result;
  }
}
