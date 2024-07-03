import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Review } from '../monClass/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  URL="http://localhost:8080/api/review/"
  constructor(private http:HttpClient) { }

 
 public  addReview(formData: FormData) :Observable<Review>{
    return this.http.post<Review>(`${this.URL+"saveReview"}`, formData)
  }
 
  public listReviewByCv(id:number):Observable<Review[]>{
    return this.http.get<Review[]>(`${this.URL+"listreviewByCv/"+id}`)
  }
  public avergerating(id:number):Observable<any>{
    return this.http.get<any>(`${this.URL+"rating/"+id}`)
  }
}
