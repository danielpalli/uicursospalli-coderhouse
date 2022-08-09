import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './usuariosStore/usuarios.reducer';
import * as userReducers from './usuarioStore/usuario.reducer';
import * as cursosReducers from './cursosStore/cursos.reducer';
export interface AppState {
  usuarios: reducers.UsuariosState;
  usuario: userReducers.UsuarioState;
  cursos: cursosReducers.CursosState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: userReducers.usuarioReducer,
  cursos: cursosReducers.cursosReducer,
};
