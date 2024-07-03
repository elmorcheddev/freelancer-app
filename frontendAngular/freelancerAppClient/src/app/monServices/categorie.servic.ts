import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CV } from '../monClass/cv';
import { Categorie } from '../monClass/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  APP_URL = "http://localhost:8080/api/catAndSousCat/"
  constructor(private http: HttpClient) { }

  public getAllCateg():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.APP_URL + "allCat"}`);
  }
}