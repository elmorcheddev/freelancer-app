import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { Proposition } from '../monClass/proposition';

@Injectable({
  providedIn: 'root'
})
export class PropositionServie {

 
APP_URL="http://localhost:8080/api/proposition/"
  constructor(private http:HttpClient) { }

  public sendProposition(propsition:Proposition):Observable<Proposition>{
    return this.http.post<Proposition>(`${this.APP_URL+"save"}`,propsition)
  }
 
  public getAllProposition():Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"all"}`)
  }
 
 
  
  public getAllPropositionByCv(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byCv/"+id}`)
  }
  public getAllPropositionByClient(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byClient/"+id}`)
  }
  public getAllPropositionByClientAccepter(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byclientAccepter/"+id}`)
  }
  public accpeter(id:number):Observable<Proposition>{
    return  this.http.get<Proposition>(`${this.APP_URL+"accepter/"+id}`)
  }
  public refuser(id:number):Observable<Proposition>{
    return  this.http.get<Proposition>(`${this.APP_URL+"refuser/"+id}`)
  }
 
}