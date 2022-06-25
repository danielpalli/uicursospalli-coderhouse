import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/core/models/usuarios.interface';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss'],
})
export class ListaDeAlumnosComponent implements OnInit {
  showImage!: boolean;
  data: Usuario[] = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      direccion: 'Una dire 123',
      telefono: '123456789',
      perfil: 'alumno', //puede ser desarrollador, it, usuario final
      sexo: 'masculino',
      email: 'test1@test.com',
    },
  ];

  columnsToDisplay = ['name', 'apellido', 'direccion','telefono', 'perfil', 'sexo', 'email'];
  constructor() {}

  ngOnInit(): void {}
}
