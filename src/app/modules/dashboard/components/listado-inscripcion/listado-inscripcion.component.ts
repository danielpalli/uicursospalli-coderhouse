import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Curso from 'src/app/core/interfaces/cursos.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AppState } from 'src/app/store/app.reducers';
import { cargarCursos } from 'src/app/store/cursosStore/cursos.actions';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-listado-inscripcion',
  templateUrl: './listado-inscripcion.component.html',
  styleUrls: ['./listado-inscripcion.component.scss'],
})
export class ListadoInscripcionComponent implements OnInit, OnDestroy {
  cursos!: Curso[];
  cursosSubscription?: Subscription;
  respuesta: boolean = false;
  displayedColumns: string[] = [
    'comision',
    'nombre',
    'horario',
    'fechainicio',
    'fechafin',
  ];
  constructor(
    private cursosService: CursosService,
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
}
