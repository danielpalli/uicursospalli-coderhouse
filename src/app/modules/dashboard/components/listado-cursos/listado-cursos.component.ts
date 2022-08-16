import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Curso from 'src/app/core/interfaces/cursos.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AppState } from 'src/app/store/app.reducers';
import { cargarCursos } from 'src/app/store/cursosStore/cursos.actions';
import Swal from 'sweetalert2';
import { CursosService } from '../../services/cursos.service';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.scss'],
})
export class ListadoCursosComponent implements OnInit, OnDestroy {
  cursos!: Curso[];
  cursosSubscription?: Subscription;
  respuesta: boolean = false;
  displayedColumns: string[] = [
    'comision',
    'nombre',
    'horario',
    'fechainicio',
    'fechafin',
    'cupo',
    'estado',
    'acciones',
  ];

  constructor(
    public dialog: MatDialog,
    private cursosService: CursosService,
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.role === 'Admin') {
      this.respuesta = true;
    }

    this.cursosSubscription = this.store
      .select('cursos')
      .subscribe(({ cursos }) => {
        this.cursos = cursos;
      });

    this.store.dispatch(cargarCursos());
  }
  ngOnDestroy(): void {
    this.cursosSubscription?.unsubscribe();
  }

  buscarCurso(curso: Curso) {
    this.router.navigate([`/autogestion/info-curso/${curso._id}`]);
  }

  eliminarCurso(curso: Curso) {
    Swal.fire({
      title: '¿Borrar curso?',
      text: `Esta a punto de borrar a ${curso.nombre}, cuya comision es ${curso.comision}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursosService.borrarCurso(curso._id!.toString()).subscribe(() => {
          Swal.fire('Borrado!', `${curso.nombre} ha sido borrado`, 'success');
          this.cursosService.obtenerCursos().subscribe((cursos: any[]) => {
            cursos = Object.values(cursos)[1];
            this.cursos = cursos;
          });
        });
      }
    });
  }

  editarCurso(curso: Curso) {
    const dialogRef = this.dialog.open(EditarCursoComponent, {
      data: curso,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cursosService.actualizarCurso(result).subscribe(() => {
          Swal.fire(
            'Actualizado!',
            `${result.nombre} ha sido actualizado`,
            'success'
          );
          this.cursosService.obtenerCursos().subscribe((cursos: any[]) => {
            cursos = Object.values(cursos)[1];
            this.cursos = cursos;
          });
        });
      }
    });
  }
}
