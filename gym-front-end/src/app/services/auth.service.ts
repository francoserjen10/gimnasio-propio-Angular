import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService: CommonService, private http: HttpClient) { }

  loggin(email: string, password: string) {
    return this.http.post(`${this.commonService.apiUrl}/login/access`, { email, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
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
