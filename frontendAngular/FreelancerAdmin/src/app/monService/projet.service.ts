import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  import { Project } from '../monClass/project';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {


 
APP_URL="http://localhost:8080/api/project/"
  constructor(private http:HttpClient) { }

 
  getAllProjet():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.APP_URL+"allAdmin"}`)
  }
  
 
  getProjectByID(id: number):Observable<Project> {
    return this.http.get<Project>(`${this.APP_URL+"byId/"+id}`)
  }
 
}