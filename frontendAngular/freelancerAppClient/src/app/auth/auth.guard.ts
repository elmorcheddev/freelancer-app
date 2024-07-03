import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
  import { UserAuthService } from '../monServices/user-auth-service';
import { UserService } from '../monServices/user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userAuthService.getToken() !== null) {
      const roles = route.data['roles'] as string[];
      console.log(roles);
      if (roles) {
        const match = this.userService.rolesMatch(roles);
        if (match) {
          return true;
        } else {
          this.router.navigate(['/login']);
          this.userAuthService.clear();
          return false;
        }
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
