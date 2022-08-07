import { createAction, props } from '@ngrx/store';
import Usuario from 'src/app/core/interfaces/usuarios.interface';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{ payload: any }>()
);
