import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CV } from '../monClass/cv';
import { Formation } from '../monClass/formation';
 
@Injectable({
  providedIn: 'root'
})
export class FormationService {
APP_URL="http://localhost:8080/api/formation/"
  constructor(private http:HttpClient) { }
  public getAllFormationByIdCv(id:number):Observable<Formation[]>{
    return this.http.get<Formation[]>(`${this.APP_URL+"listFormation/"+id}`)
  }
  public addNewFormation(form:Formation):Observable<Formation>{
    return this.http.post<Formation>(`${this.APP_URL+"save"}`,form)
  }
}