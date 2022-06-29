import { Component, OnInit } from '@angular/core';
import Alumno from 'src/app/core/models/alumnos.inteface';
import alumnos from '../../../../data/alumnos.json';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss'],
})
export class ListaDeAlumnosComponent implements OnInit {
  alumno: Alumno[] =  alumnos;

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
  dataSource = this.alumno;

  constructor() {}

  ngOnInit(): void {}
}
