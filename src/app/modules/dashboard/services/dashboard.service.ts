import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _materias:string[] = ['Matemáticas', 'Física', 'Química', 'Historia', 'Lengua', 'Geografía'];
  private _horarios:string[] = ['00:00', '08:00', '14:00'];

  get horarios():string[]{
    return [...this._horarios];
  }

  get materias():string []{
    return[...this._materias];
  }
  constructor(private http: HttpClient) { }
}
