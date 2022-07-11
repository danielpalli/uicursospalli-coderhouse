import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Materia from 'src/app/core/interfaces/materias.interface';
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

  materia!: Materia[];
  horario!: string[];
  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.dashboardService.obtenerMaterias().subscribe((materias: Materia[]) => {
      materias = Object.values(materias[1]);
      this.materia = materias;
    });

    this.inscripcionForm
      .get('materia')
      ?.valueChanges.subscribe((materia: string) => {
        this.dashboardService
          .obtenerHorarioMateria(materia)
          .subscribe((materia: any) => {
            this.horario = materia[1].horario;
          });
      });
  }

  agregar() {
    if (this.inscripcionForm.valid) {
      this.inscripcionForm.reset();
    }
  }
}
