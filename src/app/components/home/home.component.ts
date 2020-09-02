import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioValores: any={};
  constructor(private formService: FormService) { }

  ngOnInit() {

    this.getPerfil(this.formService.idUsuario);
  }


    async getPerfil(id) {

    let perfil = await this.formService.getPerfil(id).toPromise()
      .then(data => {
        this.usuarioValores = data[0];
      });

      console.log(this.usuarioValores);

  }
}
