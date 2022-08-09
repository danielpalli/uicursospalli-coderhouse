import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia-componente',
  templateUrl: './materia-componente.component.html',
  styleUrls: ['./materia-componente.component.scss'],
})
export class MateriaComponenteComponent implements OnInit {
  preInscripcion: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.preInscripcion = this.dashboardService.obtenerPreinscripcion() || [];
  }

  quitar(materia: string) {
    // this.dashboardService.quitarMateria(materia);
    // this.preInscripcion = this.dashboardService.obtenerPreinscripcion() || [];
  }

  borrarTodo() {
    // this.dashboardService.borrarTodo();
    // this.preInscripcion = this.dashboardService.obtenerPreinscripcion() || [];
  }
}
