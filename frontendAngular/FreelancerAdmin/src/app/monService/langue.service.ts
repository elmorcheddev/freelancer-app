import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CV } from '../monClass/cv';
import { Formation } from '../monClass/formation';
import { Langue } from '../monClass/Langue';
 
@Injectable({
  providedIn: 'root'
})
export class LangueService {
APP_URL="http://localhost:8080/api/langue/"
  constructor(private http:HttpClient) { }

  public saveNewLangue(lang:Langue):Observable<Langue>{
    return this.http.post<Langue>(`${this.APP_URL+"save"}`,lang)
  }
}