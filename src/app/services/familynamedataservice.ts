import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FamilyName } from '../models/familyname';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyNameDataService {

  private familynameurl = 'http://localhost:8080/api';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getFamilyNames(): Observable<FamilyName[]> {
    return this.http.get<FamilyName[]>(`${this.familynameurl}/allnames`)
      .pipe(
        catchError(this.handleError('getFamilyNames', []))
      );
  }
 
  getDatabaseFamilyNames(): Observable<FamilyName[]> {
    return this.http.get<FamilyName[]>(`${this.familynameurl}/findallnames`, this.httpOptions)
      .pipe(
        catchError(this.handleError('getDatabaseFamilyNames', []))
      );
  }

  createFamilyName(familyName: FamilyName): Observable<FamilyName> {
    return this.http.post<FamilyName>(`${this.familynameurl}/add`, JSON.stringify(familyName), this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error in createFamilyName:', error);
          throw error; // rethrow the error or handle it based on your needs
        })
      );
  }

  updateFamilyName(familyName: FamilyName): Observable<FamilyName> {
    return this.http.put<FamilyName>(`${this.familynameurl}/update`, JSON.stringify(familyName), this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error in updating family name:', error);
          throw error; // rethrow the error or handle it based on your needs
        })
      );
  }

  deleteFamilyName(id: string): Observable<FamilyName> {
    return this.http.delete<FamilyName>(`${this.familynameurl}/delete/${id}`, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error in deleting family name:', error);
          throw error; // rethrow the error or handle it based on your needs
        })
      );
  }
  
  // Error handling function
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
