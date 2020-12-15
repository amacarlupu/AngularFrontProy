import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/core/services/AuthService.service';
import { Usuario } from '../../../models/usuario.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  usuario: any = {};

  usuarioValores: any = [];


  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.crearFormulario();

  }

  ngOnInit() {
  }


  // Funcion general para los campos invalidos, recibe el nombre del campo
  campoNoValido(campo: string) {
    return this.forma.get(`${campo}`).invalid && this.forma.get(`${campo}`).touched;
  }

  // Funcion general para los tipos de errores
  campoErrores(campo: string) {
    return this.forma.get(`${campo}`).errors;
  }

  // Funcion general para campos válidos
  campoValido(campo: string) {
    return this.forma.get(`${campo}`).valid;
  }



  crearFormulario() {

    // nombre=['valor defecto', validacion sincrona, validacion asincrona]
    this.forma = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }






}



