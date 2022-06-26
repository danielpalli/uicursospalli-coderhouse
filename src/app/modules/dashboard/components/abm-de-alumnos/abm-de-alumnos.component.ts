import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.scss'],
})
export class AbmDeAlumnosComponent implements OnInit {
  btnColour = '#a54f4f';
  inscripcionForm: FormGroup = this.fb.group({

  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  preInscripcion(e: Event) {

    console.log("hola");
  }
}
