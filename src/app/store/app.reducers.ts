import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './usuariosStore/usuarios.reducer';
import * as userReducers from './usuarioStore/usuario.reducer';
import * as cursosReducers from './cursosStore/cursos.reducer';
import * as cursoReducers from './cursoStore/curso.reducer';
export interface AppState {
  usuarios: reducers.UsuariosState;
  usuario: userReducers.UsuarioState;
  cursos: cursosReducers.CursosState;
  curso: cursoReducers.CursoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: userReducers.usuarioReducer,
  cursos: cursosReducers.cursosReducer,
  curso: cursoReducers.cursoReducer,
};
