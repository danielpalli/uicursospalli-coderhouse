import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from 'src/app/modules/auth/services/auth.service';
import * as usuariosActions from './usuarios.actions';

@Injectable()
export class UsuariosEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(() =>
        this.authService.obternerUsuarios().pipe(
          map(
            (users) =>
              usuariosActions.cargarUsuariosSuccess({ usuarios: users[1] }),
            catchError((error) =>
              of(usuariosActions.cargarUsuariosError({ payload: error }))
            )
          )
        )
      )
    )
  );
}
