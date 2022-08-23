import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Curso from 'src/app/core/interfaces/cursos.interface';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private baseUrl: string = environment.baseUrl;
  private _curso!: Curso;

  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<any[]> {
    const url = `${this.baseUrl}/cursos`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get<Curso[]>(url, { headers }).pipe(
      map((cursos) => {
        return cursos;
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  crearCurso(curso: Curso): Observable<any> {
    const url = `${this.baseUrl}/cursos`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post(url, curso, { headers }).pipe(
      map((curso) => {
        return curso;
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  borrarCurso(id: string): Observable<any> {
    const url = `${this.baseUrl}/cursos/${id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.delete(url, { headers }).pipe(
      map((curso) => {
        return curso;
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  actualizarCurso(curso: Curso): Observable<any> {
    const url = `${this.baseUrl}/cursos/${curso._id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.put(url, curso, { headers }).pipe(
      map((curso) => {
        return curso;
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  obtenerCurso(id: string): Observable<any> {
    const url = `${this.baseUrl}/cursos/${id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get(url, { headers }).pipe(
      map((curso) => {
        return curso;
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  buscarAlumno(email: string) {
    const url = `${this.baseUrl}/cursos/buscar-alumnos`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post(url, { email }, { headers }).pipe(
      map((alumno) => {
        return alumno;
      }),

      catchError((err) => of(err.error.msg))
    );
  }

  agregarAlumno(email: string, id: string) {
    const url = `${this.baseUrl}/cursos/agregar-alumno/${id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post(url, { email }, { headers }).pipe(
      map((alumno) => {
        return alumno;
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  eliminarAlumno(idUser: string, id: string) {
    const url = `${this.baseUrl}/cursos/remover-alumno/${id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.post(url, { idUser }, { headers }).pipe(
      map((alumno) => {
        return alumno;
      }),
      catchError((err) => of(err.error.msg))
    );
  }
}
