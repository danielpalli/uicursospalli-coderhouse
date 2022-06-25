import Usuario from "../core/models/usuarios.interface";

export const listadoAlumnos: Usuario[] = [
  {
    nombre: 'Juan',
    apellido: 'Perez',
    direccion: 'Una dire 123',
    telefono: '123456789',
    perfil: 'alumno', //puede ser desarrollador, it, usuario final
    sexo: 'masculino',
    email: 'test1@test.com',
  },
];

export const listadoCursos: any = [
  {
    nombreMateria: 'asd',
    cantidadDeHoras: '10',
    cantidadDeClases: '2',
    nombreDelProfesorAsignado: 'Juan',
  },
  {
    nombreMateria: 'asd2',
    cantidadDeHoras: '3',
    cantidadDeClases: '1',
    nombreDelProfesorAsignado: 'Pedro',
  },
];

export const listaInscripciones: any = [
  {
    id_alumno: '1',
    id_cursoInscripto: '1',
    fechaInscricion: '2020-01-01',
    id_usuariosQueLoInscribio: '1',
  },
];
