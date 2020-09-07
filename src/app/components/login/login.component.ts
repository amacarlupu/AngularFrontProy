import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.interface';
import { asyncScheduler } from 'rxjs';
import Swal from 'sweetalert2';


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
    private formService: FormService,
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



  // Submit
  async guardar() {
    console.log(this.forma);
    console.log(this.forma.get('username').value);

    // Marcar en rojo campos vacios al hacer submit sin datos
    if (this.forma.invalid) {

      // Marcar como 'touch' los campos del formulario 'forma'
      return Object.values(this.forma.controls).forEach(control => {

        // Control es [nombre,correo], es un FormControl
        //  recorrer sus campos y marcar todos sus valores
        // como touch para mostrar el input de rojo
        control.markAsTouched();
      });

    }

    let value = await this.formService.login(this.forma.value).toPromise()
      .then(data => {
        this.usuario = data;
      });

    console.log(this.usuario);

    if (this.usuario.error) {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contaseña incorrecta'
      });

      // Reset del formulario
      this.forma.reset({
        nombre: '',
        password:''
      });

      this.formService.autenticado=false;

      return;


    } else {


      this.router.navigate(['../home']);
      console.log('pasó');

      this.formService.autenticado=true;

      this.acceder(this.usuario);
    }

  }


  acceder(codigo) {
    let codigoUsuario = codigo[0].CDG_USR;
    console.log(codigoUsuario);

    this.formService.idUsuario = codigoUsuario;
    console.log(this.formService.idUsuario);

    // let perfil= await this.formService.getPerfil(codigoUsuario).toPromise()
    //   .then( data=>{
    //        this.usuarioValores=data[0];
    //   });

    //   console.log(this.usuarioValores);

  }



}



