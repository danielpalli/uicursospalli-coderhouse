import { createReducer, on } from '@ngrx/store';
import Curso from 'src/app/core/interfaces/cursos.interface';
import {
  cargarCurso,
  cargarCursoError,
  cargarCursoSuccess,
} from './curso.actions';

export interface CursoState {
  id: string | null;
  curso: Curso | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: CursoState = {
  id: null,
  curso: null,
  loaded: false,
  loading: false,
  error: null,
};

const _cursoReducer = createReducer(
  usuariosInitialState,
  on(cargarCurso, (state, { id }) => ({ ...state, loading: true, id: id })),
  on(cargarCursoSuccess, (state, { curso }) => ({
    ...state,
    loading: false,
    loaded: true,
    curso: {...curso},
  })),
  on(cargarCursoError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  }))
);

export function cursoReducer(state: any, action: any) {
  return _cursoReducer(state, action);
}
