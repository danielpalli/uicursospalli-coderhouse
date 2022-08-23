import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Curso from 'src/app/core/interfaces/cursos.interface';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss'],
})
export class AgregarAlumnoComponent implements OnInit {
  alumno?: Usuario;
  encontro = false;
  curso?: Curso;
  formAgregarAlumno: FormGroup = this.fb.group({
    email: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private cursoService: CursosService, private router:ActivatedRoute, private routerT: Router) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.cursoService.obtenerCurso(params.id).subscribe((curso) => {
        curso = Object.values(curso)[1];
        this.curso = curso;
      });
    });
  }

  buscarAlumno() {
    this.cursoService
      .buscarAlumno(this.formAgregarAlumno.value.email)
      .subscribe((res) => {
        if (res !== "Alumno no encontrado") {
          res = Object.values(res)[1];
          this.alumno = res;
          this.encontro = true;
        } else {
          this.encontro = false;
        }
      });
    this.encontro = false;
  }

  agregarAlumno(email:string) {
    const id = this.curso?._id;
    this.cursoService.agregarAlumno(email, id!.toString()).subscribe();
    this.routerT.navigate(['/autogestion/cursos']);
  }
}
