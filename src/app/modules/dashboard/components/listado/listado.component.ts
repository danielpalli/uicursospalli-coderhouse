import { Component, OnDestroy, OnInit } from '@angular/core';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})

export class Listado implements OnInit, OnDestroy {
  usuario!: Usuario[];

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

  ngOnDestroy(): void {
    this.usuario = [];
  }

  ngOnInit(): void {
    this.authService.obternerUsuarios().subscribe((usuarios: Usuario[]) => {
      usuarios = Object.values(usuarios[1]);
      this.usuario = usuarios;
    });
  }
}
