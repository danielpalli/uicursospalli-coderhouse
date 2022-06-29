import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/core/models/usuarios.interface';
import user from '../../../data/usuario.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario =  user;

  constructor() {

   }

  ngOnInit(): void {
  }

}
