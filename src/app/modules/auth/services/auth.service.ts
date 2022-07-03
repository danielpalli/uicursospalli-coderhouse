import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthResponse } from 'src/app/core/interfaces/authResponse.interface';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(): Usuario {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const url = `${this.baseUrl}/usuarios/login`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token);
          this._usuario = {
            _id: resp._id,
            nombre: resp.nombre,
            apellido: resp.apellido,
            direccion: resp.direccion,
            telefono: resp.telefono,
            perfil: resp.perfil,
            email: resp.email,
          };
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/usuarios/renew`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        localStorage.setItem('token', resp.token);
        this._usuario = {
          _id: resp._id,
          nombre: resp.nombre,
          apellido: resp.apellido,
          direccion: resp.direccion,
          telefono: resp.telefono,
          perfil: resp.perfil,
          email: resp.email,
        };
        return resp.ok;
      }),
      catchError((err) => of(err.error.msg))
    );
  }
}
