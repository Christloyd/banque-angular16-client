import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

const baseUrl = 'http://localhost:8080/api/service-banque'


@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private http: HttpClient) {}

  connect(data: Login): Observable<any> {
    return this.http.post(`${baseUrl}/authentifier`, data);
  }

}
