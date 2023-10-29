import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtrarNombre'
})
export class FiltrarNombrePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    const resultadoBusqueda = [];

    for (const registro of value) {
      if (registro.nombre.toLowerCase().indexOf(args) > -1
        || registro.nombre.toUpperCase().indexOf(args) > -1
        || registro.nombre.indexOf(args) > -1) {
        resultadoBusqueda.push(registro)
      }
    }
    return resultadoBusqueda;
  }

}
