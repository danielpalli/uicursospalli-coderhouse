import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Materia from 'src/app/core/interfaces/materias.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.scss'],
})
export class FormularioInscripcion implements OnInit {
  btnColour = '#a54f4f';

  inscripcionForm: FormGroup = this.fb.group({
    materia: ['', [Validators.required]],
    horarios: ['', [Validators.required]],
  });

  materia!: Materia[];
  horario!: string[];
  preInscripcion!: any[];

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    // this.dashboardService.obtenerMaterias().subscribe((materias: Materia[]) => {
    //   materias = Object.values(materias[1]);
    //   this.materia = materias || [];
    // });

    // this.inscripcionForm
    //   .get('materia')
    //   ?.valueChanges.subscribe((materia: string) => {
    //     this.dashboardService
    //       .obtenerHorarioMateria(materia)
    //       .subscribe((materia: any) => {
    //         this.horario = materia[1].horario;
    //       });
    //   });

    // this.preInscripcion = [];
  }

  agregar() {
    // if (this.inscripcionForm.valid) {
    //   this.dashboardService.agregarMateria(this.inscripcionForm.value);
    //   this.inscripcionForm.get('materia')?.setValue('');
    //   this.inscripcionForm.get('horarios')?.setValue('');
    // }
  }
}
