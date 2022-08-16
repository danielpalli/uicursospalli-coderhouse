import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Curso from 'src/app/core/interfaces/cursos.interface';
import { ListadoCursosComponent } from '../listado-cursos/listado-cursos.component';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss'],
})
export class EditarCursoComponent implements OnInit {
  editarCursoForm: FormGroup = this.fb.group({
    _id: [this.data._id],
    nombre: [
      this.data.nombre,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    horario: [this.data.horario, Validators.required],
    comision: [this.data.comision, Validators.required],
    cupo: [this.data.cupo, Validators.required],
    docente: [this.data.docente, Validators.required],
    estado: [this.data.estado, Validators.required],
    fechaInicio: [this.data.fechaInicio, Validators.required],
    fechaFin: [this.data.fechaFin, Validators.required],
    alumnos: [this.data.alumnos],
  });

  constructor(
    public dialogRef: MatDialogRef<ListadoCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  editarCurso() {
    this.dialogRef.close(this.editarCursoForm.value);
  }
}
