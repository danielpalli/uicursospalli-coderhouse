import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import Swal from 'sweetalert2';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-formulario-nuevo-curso',
  templateUrl: './formulario-nuevo-curso.component.html',
  styleUrls: ['./formulario-nuevo-curso.component.scss'],
})
export class FormularioNuevoCursoComponent implements OnInit {
  user?: Usuario;
  formNuevoCurso: FormGroup = this.fb.group({
    nombre: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    horario: ['', [Validators.required]],
    comision: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
    ],
    fechaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    cupo: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
    estado: [true],
    docente: ['', [Validators.required]],
    alumnos: [[]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cursoService: CursosService,
    private router:Router
  ) {
    this.user = this.authService.usuario;
  }

  ngOnInit(): void {}

  campoNoValido(campo: string): boolean {
    if (
      this.formNuevoCurso.get(campo)?.invalid &&
      this.formNuevoCurso.get(campo)?.touched
    ) {
      return true;
    } else {
      return false;
    }
  }

  crearCurso() {
    if (this.formNuevoCurso.invalid) {
      this.formNuevoCurso.markAllAsTouched();
      return;
    }

    const curso = this.formNuevoCurso.value;
    this.cursoService.crearCurso(curso).subscribe((resp) => {
      Swal.fire('Curso creado', 'El curso se creó correctamente', 'success');
      this.router.navigate(['/autogestion/cursos']);
    });
  }
}
