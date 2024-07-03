import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CV } from '../monClass/cv';
import { Formation } from '../monClass/formation';
import { Experience } from '../monClass/Experience';
 
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
APP_URL="http://localhost:8080/api/exp/"
  constructor(private http:HttpClient) { }

  public getExpByCV(id :number):Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.APP_URL+"expByCV/"+id}`)
  }
  public saveNewExper(exp:Experience):Observable<Experience>{
    return this.http.post<Experience>(`${this.APP_URL+"save"}`,exp)
  }
}