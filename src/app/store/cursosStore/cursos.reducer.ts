import { createReducer, on } from '@ngrx/store';
import Curso from 'src/app/core/interfaces/cursos.interface';
import {
  cargarCursos,
  cargarCursosError,
  cargarCursosSuccess,
} from './cursos.actions';

export interface CursosState {
  cursos: Curso[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: CursosState = {
  cursos: [],
  loaded: false,
  loading: false,
  error: null,
};

const _cursosReducer = createReducer(
  usuariosInitialState,
  on(cargarCursos, (state) => ({ ...state, loading: true })),
  on(cargarCursosSuccess, (state, { cursos }) => ({
    ...state,
    loading: false,
    loaded: true,
    cursos: [ ...cursos ],
  })),
  on(cargarCursosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  }))
);

export function cursosReducer(state: any, action: any) {
  return _cursosReducer(state, action);
}
