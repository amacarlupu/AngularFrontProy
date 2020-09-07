import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormService } from '../services/form.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private formService:FormService, private router:Router){}
  canActivate(): boolean {

    if(this.formService.autenticado){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }

  }

}
