import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate {

  constructor(private router:Router) {
  }

  canActivate(){

    const rol=localStorage.getItem("rol");

    if(!rol){

    this.router.navigate(['/']);
return false;
    }else{


      return  true;
    }


  }

}
