import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService {

    constructor(
        private profileService: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



        console.log(this.profileService.getToken());
        const tokenReq = req.clone({
            setHeaders:{
                Authorization: `Bearer ${ this.profileService.getToken() }`
                // authorization: req.headers.set('Authorization', `Bearer ${this.profileService.getToken()}`)
            }
        })
        return next.handle(tokenReq);


    }

}
