import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Curso from 'src/app/core/interfaces/cursos.interface';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { AppState } from 'src/app/store/app.reducers';
import { cargarCurso } from 'src/app/store/cursoStore/curso.actions';
import Swal from 'sweetalert2';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.scss'],
})
export class VerCursoComponent implements OnInit, OnDestroy {
  curso?: Curso | any;
  alumno?: any;
  cursoSubscription?: Subscription;
  routerSubscription?: Subscription;
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private routerL: Router,
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
    this.cursoSubscription = this.store
      .select('curso')
      .subscribe(({ curso }) => {
        this.curso = curso;
        this.alumno = curso?.alumnos.map((alumno) => {
          return alumno;
        });
      });

    this.routerSubscription = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarCurso({ id }));
    });
  }
  ngOnDestroy() {
    this.cursoSubscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }

  agregarAlumno(id: string) {
    this.routerL.navigate(['/autogestion/agregar-alumno', id]);
  }

  eliminarAlumno(idUser: string) {
    const id = this.curso?._id;
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.value) {
        this.cursoService.eliminarAlumno(idUser, id).subscribe((res) => {
          Swal.fire('Eliminado!', 'El alumno ha sido eliminado', 'success');
          this.routerL.navigate(['/autogestion/cursos']);
        }),
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salió mal!',
            });
          };
      }
    });
  }
}
