import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CV } from '../monClass/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  APP_URL = "http://localhost:8080/api/cvs/"
  constructor(private http: HttpClient) { }

  public addNewCv(formData:FormData): Observable<CV> {
    return this.http.put<CV>(`${this.APP_URL + "saveCv"}`, formData)
  }
  public getCvId(id: number): Observable<CV> {
    return this.http.get<CV>(`${this.APP_URL + "findByID/" + id}`)
  }
  public getCvUtilisateur(id: number): Observable<CV> {
    return this.http.get<CV>(`${this.APP_URL + "findCvByUtilisateur/" + id}`)
  }
  public getAllCv(): Observable<CV[]> {
    return this.http.get<CV[]>(`${this.APP_URL + "all"}`)
  }
 
}