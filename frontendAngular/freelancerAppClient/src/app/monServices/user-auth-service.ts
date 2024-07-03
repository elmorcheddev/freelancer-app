import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  
  public setRoles(roles: string[]): void {
    localStorage.setItem("roles", JSON.stringify(roles));
  }
  
  public getRoles(): string[] {
    return JSON.parse(localStorage.getItem('roles') || '[]');
  }
  
  public setToken(token: string): void {
    localStorage.setItem("token", token);
  }
  
  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public clear(): void {
    localStorage.clear();
  }
  
  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
  getCurrentUser() {
    const token = this.getToken();
    if (token) {
        const jwtHelper = new JwtHelperService();
        const decodedToken = jwtHelper.decodeToken(token);
        const currentTime = Math.floor(Date.now() / 1000); // Convert current time to seconds
        
        if (decodedToken.exp && currentTime > decodedToken.exp) {
             this.clear(); 
            return null; 
        } else {
            return decodedToken.sub; 
        }
    } else {
        return null; 
    }
}
}
