import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FamilyName } from '../models/testfullname';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectFamilyNameService {

  private familynameurl = 'http://localhost:8080/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // function pulls names from the backend services
  getFamilyNames() {
    return this.http.get<FamilyName[]>(this.familynameurl + "/allnames", this.httpOptions);
  }


}
