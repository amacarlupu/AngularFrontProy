import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/AuthService.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private profileService: AuthService,
    private router: Router
  ){}


  canActivate(): boolean {

    if( this.profileService.loggedIn() ){
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }

}
