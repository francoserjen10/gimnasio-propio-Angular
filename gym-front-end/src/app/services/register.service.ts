import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8000/register';
  // private http = inject(HttpClient);

  constructor(private http: HttpClient) { }

  getAllUserService(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUserService(user: User): Observable<User> {
    const result = this.http.post<User>(`${this.apiUrl}/create-user`, user, {
      headers: { 'Content-Type': 'application/json' }
    })
    console.log("createUserService", result)
    return result;
  }
}
