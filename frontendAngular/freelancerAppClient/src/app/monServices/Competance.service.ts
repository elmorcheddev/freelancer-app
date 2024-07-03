import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CV } from '../monClass/cv';
import { Formation } from '../monClass/formation';
import { Experience } from '../monClass/Experience';
import { CompetanceCv } from '../monClass/CompetanceCv';
 
@Injectable({
  providedIn: 'root'
})
export class CompService {
APP_URL="http://localhost:8080/api/comp/"
  constructor(private http:HttpClient) { }

  public getCompByCV(id :number):Observable<CompetanceCv[]>{
    return this.http.get<CompetanceCv[]>(`${this.APP_URL+"compbycv/"+id}`)
  }
  public saveNewCom(exp:CompetanceCv):Observable<CompetanceCv>{
    return this.http.post<CompetanceCv>(`${this.APP_URL+"save"}`,exp)
  }
}