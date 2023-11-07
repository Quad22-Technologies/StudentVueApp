import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { gradelist } from '../models/gradelist';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectFamilyNameService {

  private gradelisturl = 'http://localhost:8080/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // function pulls names from the backend services
  getGradeList() {
    return this.http.get<gradelist[]>(this.gradelisturl + "/grades", this.httpOptions);
  }


}
