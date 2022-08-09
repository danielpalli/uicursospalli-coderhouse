import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from 'src/app/modules/auth/services/auth.service';
import * as usuarioActions from './usuario.actions';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      mergeMap((action) =>
        this.authService.buscarUsuario(action.id).pipe(
          map(
            (user) =>
              usuarioActions.cargarUsuarioSuccess({ usuario: user }),
            catchError((error) =>
              of(usuarioActions.cargarUsuarioError({ payload: error }))
            )
          )
        )
      )
    )
  );
}


