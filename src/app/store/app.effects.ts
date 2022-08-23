import { CursosEffects } from './cursosStore/cursos.effects';
import { CursoEffects } from './cursoStore/curso.effects';
import { UsuariosEffects } from './usuariosStore/usuarios.effetcs';
import { UsuarioEffects } from './usuarioStore/usuario.effects';

export const EffectsArray: any[] = [
  UsuariosEffects,
  UsuarioEffects,
  CursosEffects,
  CursoEffects,
];

