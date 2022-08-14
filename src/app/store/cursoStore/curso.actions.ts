import { createAction, props } from '@ngrx/store';
import Curso from 'src/app/core/interfaces/cursos.interface';

export const cargarCurso = createAction(
  '[Curso] Cargar Curso',
  props<{ id: string }>()
);

export const cargarCursoSuccess = createAction(
  '[Curso] Cargar Curso Success',
  props<{ curso: Curso }>()
);

export const cargarCursoError = createAction(
  '[Curso] Cargar Curso Error',
  props<{ payload: any }>()
);
