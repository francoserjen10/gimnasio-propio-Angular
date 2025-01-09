import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CommonService } from './common.service';
import { jwtDecode } from 'jwt-decode';
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
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  getRolesOfToken(): number | null {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken: User = jwtDecode<User>(token);
      return decodedToken.rolId ?? null;
    }
    return null;
  }

  saveToken(token: string): string | undefined {
    const tokens = Cookies.set('token', token, {
      HttpOnly: true,
      FsameSite: 'strict',
      expires: 1 //va a expirar en 1 dia
    });
    return tokens
  }

  getAllUserService(): Observable<User[]> {
    return this.http.get<User[]>(`${this.commonService.apiUrl}/register`);
  }

  createUserService(user: User): Observable<User> {
    const result = this.http.post<User>(`${this.commonService.apiUrl}/register/create-user`, user, {
      headers: { 'Content-Type': 'application/json' }
    })
    console.log("createUserService", result)
    return result;
  }
}
