import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 import { UserAuthService } from './user-auth-service'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
PATH_APP="http://localhost:8080/auth"
  constructor(private httpClient:HttpClient,private userAuthService:UserAuthService) { }
  requestHeader = new HttpHeaders({
	   
		   "No-Auth":"True" 
	   }
  )
  public loginUtilisateur(loginData:any){
	  return this.httpClient.post<any>(`${this.PATH_APP+"/login"}`,loginData,{headers:this.requestHeader})
  }
  getUserInfo(): Observable<any> {
    const token = this.userAuthService.getToken(); // Get token from storage or service

    if (!token) {
      throw new Error('No authentication token found');
    }

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.httpClient.get<any>(this.PATH_APP+"/getConnectedUser", { headers });
  }
  
 
 public rolesMatch(allowedRoles:any):boolean{
	 let isMatch=false;
	 const adminRoles:any=this.userAuthService.getRoles();
	 if(adminRoles != null && adminRoles){
		 for(let i=0 ; i<adminRoles.length; i++){
			 for(let j=0;j<allowedRoles.length;j++){
				if(adminRoles[i].nomRole === allowedRoles[j]){
					 isMatch=true;
				 return isMatch;
				}else{
					return isMatch;
				}
				
			 }
		 }
		 
	 }
	 return isMatch;
	 }
	 private loginSubject = new Subject<any>();

  loginSuccess$ = this.loginSubject.asObservable();

  emitLoginSuccess(data: any) {
    this.loginSubject.next(data);
  }  
public getUserDetails(email:string):Observable<any> {
	return this.httpClient.get<any>(`${this.PATH_APP+"/findbyEmail/"+email}`);
}
}
