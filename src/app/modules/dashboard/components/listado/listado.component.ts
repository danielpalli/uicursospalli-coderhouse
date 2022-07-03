import { Component, OnInit } from '@angular/core';
// import Alumno from 'src/app/core/interfaces/alumnos.inteface';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
// import alumnos from '../../../../data/alumnos.json';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class Listado implements OnInit {
  usuario: Usuario[] = [];

  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'direccion',
    'telefono',
    'perfil',
    'sexo',
    'email',
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.obternerUsuarios().subscribe((usuarios: any) => {
      this.usuario = usuarios[1];

    });
  }
}
