import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.scss'],
})
export class AbmDeAlumnosComponent implements OnInit {
  btnColour = '#a54f4f';

  inscripcionForm: FormGroup = this.fb.group({
    materia: ['', [Validators.required]],
    horarios: ['', [Validators.required]],
  });

  materias: string[] = [];
  horarios: string[] = [];

  materiasAgregadas: string[] = [];

  constructor(private fb: FormBuilder, private dashboardService:DashboardService) {}

  ngOnInit(): void {
    this.materias = this.dashboardService.materias;
    this.horarios = this.dashboardService.horarios;
  }

  agregar() {
    if (this.inscripcionForm.valid) {
      this.materiasAgregadas.push(this.inscripcionForm.value.materia);
      this.inscripcionForm.reset();
    }

    console.log(this.materiasAgregadas);
  }
}
