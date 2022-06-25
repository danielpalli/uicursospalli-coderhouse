import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreYApellido'
})
export class NombreYApellidoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${value.nombre} ${value.apellido}`;
  }

}
