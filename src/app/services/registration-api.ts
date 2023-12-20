import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { regObj } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class registrationApiService {

  private registrationurl = 'http://localhost:8080/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // function pulls names from the backend services
  getRegInfo() {
    return this.http.get<regObj[]>(this.registrationurl + "/registration", this.httpOptions);
  }
}
