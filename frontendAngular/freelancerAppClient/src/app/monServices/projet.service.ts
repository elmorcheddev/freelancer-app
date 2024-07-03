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

  public addNewProject(project:Project):Observable<Project>{
    return this.http.post<Project>(`${this.APP_URL+"add"}`,project)
  }
  getAllProjet():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.APP_URL+"all"}`)
  }
  getProjetByClient(id :number):Observable<Project[]>{
    return this.http.get<Project[]>(`${this.APP_URL+"byClient/"+id}`)
  }
  getProjetByCat(id :number):Observable<Project[]>{
    return this.http.get<Project[]>(`${this.APP_URL+"byCat/"+id}`)
  }
  getProjectByID(id: number):Observable<Project> {
    return this.http.get<Project>(`${this.APP_URL+"byId/"+id}`)
  }
  deleteProjectByID(id: number):Observable<Project> {
    return this.http.delete<Project>(`${this.APP_URL+"deletePrj/"+id}`)
  }
  getProjectByFreelancer(id: number) :Observable<Project[]>{
    return this.http.get<Project[]>(`${this.APP_URL+"forFreelancer/"+id}`)

   }
}