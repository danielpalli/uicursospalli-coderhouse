import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.scss'],
})
export class FormularioInscripcion implements OnInit, OnDestroy {
  btnColour = '#a54f4f';

  inscripcionForm: FormGroup = this.fb.group({
    materia: ['', [Validators.required]],
    horarios: ['', [Validators.required]],
  });

  materias: string[] = [];
  horarios: string[] = [];


  constructor(private fb: FormBuilder, private dashboardService:DashboardService) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.materias = this.dashboardService.materias;
    this.horarios = this.dashboardService.horarios;
  }

  agregar() {
    if (this.inscripcionForm.valid) {
      this.inscripcionForm.reset();
    }

  }
}
