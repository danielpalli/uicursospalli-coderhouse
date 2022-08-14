import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CursosService } from 'src/app/modules/dashboard/services/cursos.service';


import * as cursoActions from './curso.actions';

@Injectable()
export class CursoEffects {
  constructor(private actions$: Actions, private cursoService: CursosService) {}

  cargarCurso$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cursoActions.cargarCurso),
      mergeMap((action) =>
        this.cursoService.obtenerCurso(action.id).pipe(
          map(
            (curso) =>
              cursoActions.cargarCursoSuccess({ curso: curso }),
            catchError((error) =>
              of(cursoActions.cargarCursoError({ payload: error }))
            )
          )
        )
      )
    )
  );
}


