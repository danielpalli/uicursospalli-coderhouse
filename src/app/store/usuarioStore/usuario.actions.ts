import { createAction, props } from '@ngrx/store';
import Usuario from 'src/app/core/interfaces/usuarios.interface';

export const cargarUsuario = createAction(
  '[Usuario] Cargar Usuario',
  props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar Usuario Success',
  props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] Cargar Usuario Error',
  props<{ payload: any }>()
);
