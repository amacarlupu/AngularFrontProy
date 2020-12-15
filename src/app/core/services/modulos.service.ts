import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  private url = 'https://api-login-lazzar.herokuapp.com'

  constructor(
    private http: HttpClient,
    private router:Router) {

  }

  getModuloById(user:string){
    return this.http.get(`${this.url}/modulo/mastermodulo/${ user }`);
  }

}

