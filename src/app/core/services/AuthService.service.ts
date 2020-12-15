import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://api-login-lazzar.herokuapp.com'

  constructor(
    private http: HttpClient,
    private router:Router) {

  }

  login(user){
    return this.http.post<Usuario>(`${this.url}/user/login`, user);
  }

  loggedIn(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }

  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }

  // getPerfil(id: String){
  //   return this.http.get(`${this.url}/profile/${id}`);
  // }

  getPerfil(){
    return this.http.get(`${this.url}/user/profile`);
  }

  getPermiso(){
    return this.http.get(`${this.url}/user/permiso`)
    .pipe(
      map((resp: any[]) => {
        return resp.map(detalle => {
          return {
            modulo: detalle.CDG_OPC,
            opcion: detalle.NUM_ITEM
          }
        })
      })
    )
  }
}

