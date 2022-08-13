import Usuario from "./usuarios.interface";

export default interface Curso {
  _id?: string;
  nombre?: string;
  horario?: string;
  comision?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  cupo?: number;
  estado?: boolean;
  docente?: string;
  alumnos: Usuario[];
}
