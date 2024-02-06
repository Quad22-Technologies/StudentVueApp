import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassGrade } from '../models/classgrade';

@Injectable({
  providedIn: 'root'
})
export class ClassGradesApiService {

  private classgradesURL = 'http://localhost:8080/api/grades'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // function pulls classes from the backend services
  getGrades(): Observable<ClassGrade[]> {
    return this.http.get<ClassGrade[]>(this.classgradesURL + "/get/all", this.httpOptions);
  }

  getGradesByUser(userid: string): Observable<ClassGrade[]> {
    return this.http.get<ClassGrade[]>(this.classgradesURL + "/get/byUser/" + userid, this.httpOptions);
  }

  registerClassGrade(classgrade: ClassGrade) {
    return this.http.post<object>(this.classgradesURL + "/create", classgrade, this.httpOptions);
  }

  removeClassGrade(classgradeid: string) {
    console.log("test");
    return this.http.delete<object>(this.classgradesURL + "/delete/" + classgradeid, this.httpOptions);
  }
}
