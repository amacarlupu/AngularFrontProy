import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../components/interfaces/usuario.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormService {


  idUsuario: String;
  private url = 'https://api-login-lazzar.herokuapp.com/api/user/'

  constructor(private http: HttpClient) {

  }


  login(usuario: Usuario) {

    return this.http.post(`${this.url}/login`, usuario);

  };

  getPerfil(id: String){
    return this.http.get(`${this.url}profile/${id}`);

  }

  // getUsuario():any[]{
  //   return this.usuarioValores;
  // }

  // llenarUsuario(arreglo:any[]){
  //   // Si es verdadero devuelve un numero mayor a 0, si es false -> -1
  //   if(nombre.indexOf(termino)>=0){

  //     // Añadirle un nuevo campo index con el valor i del arreglo recorrido
  //    // para eso tambien añadirlo en la interfaz Heroe
  //     heroe.index=i;
  //    heroesArr.push(heroe); // Añadir al arreglo con resultados
  //  }

  // }



}

