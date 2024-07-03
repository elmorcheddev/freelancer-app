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
  public getAllProposition(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byclient/"+id}`)
  }
 
 public deleteProp(id:number):Observable<Proposition>{
  return this.http.delete<Proposition>(`${this.APP_URL+"deleteProp/"+id}`)
 }
  public getAllPropositionByCvAccepter(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byCvaccepter/"+id}`)
  }
  public getAllPropositionByCvRefuser(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byCvrefuser/"+id}`)
  }
  public getAllPropositionByCvEnattent(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byCvenattent/"+id}`)
  }
  
  public getAllPropositionByCv(id:number):Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byCv/"+id}`)
  }
  public getAllPropositionAccepter():Observable<Proposition[]>{
    return  this.http.get<Proposition[]>(`${this.APP_URL+"byPropositionAccepter"}`)
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