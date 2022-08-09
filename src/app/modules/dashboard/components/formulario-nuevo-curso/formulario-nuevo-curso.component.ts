import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-nuevo-curso',
  templateUrl: './formulario-nuevo-curso.component.html',
  styleUrls: ['./formulario-nuevo-curso.component.scss'],
})
export class FormularioNuevoCursoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  formNuevoCurso: FormGroup = this.fb.group({
    nombre: [''],

  });

  ngOnInit(): void {}
}
