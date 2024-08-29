import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl = 'http://localhost:8000';
  // private http = inject(HttpClient);

  constructor() { }

}
