import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticationService implements CanActivate {

  constructor(private router : Router) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('user')==null){
        return true;
      }
      return false;
  }  

}
