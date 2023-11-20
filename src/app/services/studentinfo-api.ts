import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentInfo } from '../models/studentinfo';
import { Observable } from 'rxjs/internal/Observable';

const apiURL = 'http://localhost:8080/api/studentProfile'

@Injectable({
  providedIn: 'root'
})
export class StudentInfoApiService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // pulls data about a student from the backend
  getStudentInfo(studentID: Number): Observable<StudentInfo> {
    return this.http.get<StudentInfo>(apiURL + "?studentID=" + studentID.toString(), this.httpOptions);
  }
}
