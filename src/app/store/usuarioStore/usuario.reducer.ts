import { createReducer, on } from '@ngrx/store';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import {
  cargarUsuario,
  cargarUsuarioError,
  cargarUsuarioSuccess,
} from './usuario.actions';

export interface UsuarioState {
  id: string | null;
  user: Usuario | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuariosInitialState,
  on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id: id })),

  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  }))
);

export function usuarioReducer(state: any, action: any) {
  return _usuarioReducer(state, action);
}
