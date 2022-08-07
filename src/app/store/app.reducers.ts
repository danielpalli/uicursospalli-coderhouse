import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './usuariosStore/usuarios.reducer';

export interface AppState {
  usuarios: reducers.UsuariosState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
};
