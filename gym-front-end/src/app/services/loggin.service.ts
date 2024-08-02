import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  private apiUrl = 'http://localhost:8000/login';

  constructor(private http: HttpClient) { }

  loggin(email: string, password: string) {
    const result = this.http.post(`${this.apiUrl}/access`, { email, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
    return result;
  }
}
