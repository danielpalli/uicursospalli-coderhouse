import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Curso from 'src/app/core/interfaces/cursos.interface';
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
      }
      ),
      catchError((err) => of(err.error.msg))
    );

  }
}
