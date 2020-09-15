import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/AuthService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioValores: any={};
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.getPerfil(this.authService.idUsuario);
  }


    async getPerfil(id) {

    let perfil = await this.authService.getPerfil(id).toPromise()
      .then(data => {
        this.usuarioValores = data[0];
      });

      console.log(this.usuarioValores);

  }
}
