import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/AuthService.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  salir(){
    this.authService.logOut();
  }
}