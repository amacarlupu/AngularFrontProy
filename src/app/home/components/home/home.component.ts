import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/AuthService.service';
import { Usuario } from '../../../models/usuario.interface';
import { ModuloService } from '../../../core/services/modulos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perfil: any = {};
  detallePermiso: any = {};
  newArray: any = {};
  moduloIndex: any = [];

  constructor(private authService: AuthService,
    private moduleService: ModuloService,
    private router: Router) { }

  ngOnInit() {

    this.getPermiso();
    this.getPerfil();
  }

  getPerfil() {
    this.authService.getPerfil()
      .subscribe(
        res => {
          console.log(res)
          this.perfil = res
        },
        err => console.log(err)
      )
  }

  getPermiso() {
    this.authService.getPermiso()
      .subscribe(
        res => {
          console.log(res);
          this.detallePermiso = res
          //   this.newArray = res.filter( (item, index) => {
          //    return res.indexOf( item ) === index
          //   // return item.modulo === 'ALM'
          // });

          // Utilizo el método reduce para ir creando el array resultante
          this.newArray = res.reduce((prev, current, index, arr) => {
            // Compruebo si ya existe el elemento
            let exists = prev.find(x => x.modulo === current.modulo);
            // Si no existe lo creo con un array vacío en VALOR
            if (!exists) {
              exists = { modulo: current.modulo, opcion: [] };
              prev.push(exists);
            }
            // Si el elemento actual tiene VALOR lo añado al array del
            // elemento existente
            if (current.opcion != null) {
              // Convierto el valor a numérico reemplazando el carácter separador
              // let val = parseInt(current.opcion.replace(',', '.'),10);
              let val = current.opcion.replace(',', '.');
              // Si es un valor numérico válido lo añado al resultado
              if (!isNaN(val)) {
                exists.opcion.push(val);
              }
            }
            // Devuelvo el array resultado para la nueva iteración
            return prev;

          }, []);
          console.log(this.newArray);
          this.getModulo(this.newArray);

        },
        err => console.log(err)
      )
  }


  getModulo(reqModule) {
    // console.log(reqModule[0].modulo);
    console.log(reqModule.length);

    for(let i=0; i < reqModule.length ; i++){

      console.log(reqModule[i].modulo);
      this.moduleService.getModuloById(reqModule[i].modulo).
        subscribe(
          res => {
            console.log('modulo', res);
            if(res[0]){
              this.moduloIndex.push(res);
            }
                // this.recorreModulo(this.moduloIndex);
          });

    }
  }


    // reqModule.forEach(elemento => {

    //   console.log(elemento.modulo);
    //   this.moduleService.getModuloById(elemento.modulo).
    //     subscribe(
    //       res => {
    //         console.log('modulo', res);
    //         // this.moduloIndex = res;

    //         this.moduloIndex=res.concat(res);
    //       })
    // });




  verModulo(idx:number){
    this.router.navigate(['modulo',idx]);
  }

}
