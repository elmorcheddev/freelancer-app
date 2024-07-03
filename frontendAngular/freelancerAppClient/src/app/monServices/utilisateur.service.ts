import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { Utilisateur } from '../monClass/client';
import { CV } from '../monClass/cv';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

 
APP_URL="http://localhost:8080/api/utilisateur/"
  constructor(private http:HttpClient) { }

  saveClient(client:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.APP_URL+"save/client"}`,client)
  }
  getByIdClient(id:number):Observable<Utilisateur>{
    return  this.http.get<Utilisateur>(`${this.APP_URL+"get/client/"+id}`)
  }
  getAllUtilisateur() :Observable<Utilisateur[]>{
    return  this.http.get<Utilisateur[]>(`${this.APP_URL+"allUtilisateur"}`)
  }
  saveJobSeeker(freelancer:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.APP_URL+"save/jobseeker"}`,freelancer)
  }
  getByIdJobseeker(id:number):Observable<Utilisateur>{
    return  this.http.get<Utilisateur>(`${this.APP_URL+"get/jobseeker/"+id}`)
  }
  getFreelancerByCat(id:number):Observable<CV[]>{
    return  this.http.get<CV[]>(`${this.APP_URL+"listFreelancerbyCat/"+id}`)
  }
  getUtilisateur(id: number) {
    return  this.http.get<Utilisateur>(`${this.APP_URL+"utilisateurById/"+id}`)
  }
}
