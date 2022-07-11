import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-materia-componente',
  templateUrl: './materia-componente.component.html',
  styleUrls: ['./materia-componente.component.scss'],
})
export class MateriaComponenteComponent implements OnInit {
  preInscripcion: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.preInscripcion = this.dashboardService.obtenerPreinscripcion() || [];

  }

  quitar(materia: string) {
    this.dashboardService.quitarMateria(materia);
    this.preInscripcion = this.dashboardService.obtenerPreinscripcion() || [];
  }
}
