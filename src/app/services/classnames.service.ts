import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassName } from '../models/classnames';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassNamesApiService {

  private classnamesURL = 'http://localhost:8080/api/classes'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // function pulls classes from the backend services
  getClasses(): Observable<ClassName[]> {
    return this.http.get<ClassName[]>(this.classnamesURL + "/get/all", this.httpOptions);
  }

  getClass(id: string): Observable<ClassName> {
    return this.http.get<ClassName>(this.classnamesURL + "/get/" + id, this.httpOptions);
  }

  getRegisteredClasses(uid: string): Observable<ClassName[]> {
    return this.http.get<ClassName[]>(this.classnamesURL + "/registered/" + uid, this.httpOptions);
  }

  getAvailableClasses(uid: string): Observable<ClassName[]> {
    return this.http.get<ClassName[]>(this.classnamesURL + "/available/" + uid, this.httpOptions);
  }
}
