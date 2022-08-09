import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Curso from 'src/app/core/interfaces/cursos.interface';
import { AppState } from 'src/app/store/app.reducers';
import { cargarCursos } from 'src/app/store/cursosStore/cursos.actions';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.scss'],
})
export class ListadoCursosComponent implements OnInit, OnDestroy {
  cursos!:Curso[];
  cursosSubscription?: Subscription;
  displayedColumns: string[] = [
    'comision',
    'nombre',
    'horario',
    'fechainicio',
    'fechafin',
    'cupo',
    'estado',
  ];

  constructor(private cursosService:CursosService, private store:Store<AppState>) {}

  ngOnInit(): void {
    this. cursosSubscription = this.store.select('cursos').subscribe(({ cursos }) => {
      this.cursos = cursos;
    });

    this.store.dispatch(cargarCursos());
  }
  ngOnDestroy(): void {
    this.cursosSubscription?.unsubscribe();
  }
}
