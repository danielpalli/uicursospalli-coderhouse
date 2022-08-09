import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { CursosService } from 'src/app/modules/dashboard/services/cursos.service';
import * as cursosActions from './cursos.actions';

@Injectable()
export class CursosEffects {
  constructor(
    private actions$: Actions,
    private cursosService: CursosService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cursosActions.cargarCursos),
      mergeMap(() =>
        this.cursosService.obtenerCursos().pipe(

          map(
            (cursos) =>
              cursosActions.cargarCursosSuccess({ cursos: Object.values(cursos)[1] }),
            catchError((error) =>
              of(cursosActions.cargarCursosError({ payload: error }))
            )
          )
        )
      )
    )
  );
}
