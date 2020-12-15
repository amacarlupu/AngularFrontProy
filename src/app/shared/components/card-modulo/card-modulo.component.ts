import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-modulo',
  templateUrl: './card-modulo.component.html',
  styleUrls: ['./card-modulo.component.css']
})
export class CardModuloComponent implements OnInit {


  // variable de la tarjeta, con el input puede recibir variables desde
  // afuera y si no recibe se inicializa con lo declarado. ejem: any
  @Input() modulo:any={};
  @Input() index:number; // Indice que se recibe desde fuera del componente

  // personajeSeleccionado emite un tipo number (reemplazo de index)
  // que será escuchado por el padre (heroes component)
  @Output() moduloSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    // Inicializar EventEmitter y se vuelve un observable que se puede suscribit
    this.moduloSeleccionado=new EventEmitter();
  }

  ngOnInit() {
    console.log('aqui estas modulo',this.modulo);
  }

  // Evento personalizado
  verOpciones(){
    // this.personajeSeleccionado.emit(this.index);
    this.router.navigate(['/modulo',this.index]);
  }

}



