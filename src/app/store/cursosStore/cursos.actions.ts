import { createAction, props } from '@ngrx/store';
import Curso from 'src/app/core/interfaces/cursos.interface';

export const cargarCursos = createAction('[Cursos] Cargar Cursos');

export const cargarCursosSuccess = createAction(
  '[Cursos] Cargar Cursos Success',
  props<{ cursos: Curso[] }>()
);

export const cargarCursosError = createAction(
  '[Cursos] Cargar Cursos Error',
  props<{ payload: any }>()
);
