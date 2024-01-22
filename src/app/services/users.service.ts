import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleUser } from '../models/user';
import { regObj, RegResult } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  private usersURL = 'http://localhost:8080/api/users'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // function pulls classes from the backend services
  getUsers(): Observable<SimpleUser[]> {
    return this.http.get<SimpleUser[]>(this.usersURL + "/get/all", this.httpOptions);
  }

  getUser(id: string): Observable<SimpleUser> {
    return this.http.get<SimpleUser>(this.usersURL + "/get/" + id, this.httpOptions);
  }

  registerUser(regData: regObj): Observable<RegResult> {
    return this.http.post<RegResult>(this.usersURL + "/register", regData, this.httpOptions);
  }
}
