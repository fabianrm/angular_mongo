import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    //let newValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    //return newValue;

    if (value === "imageUrls") {
      return 'Imagen'
    }

    if (value === "brand") {
      return 'Marca'
    }

    if (value === "availability") {
      return 'Disponible'
    }

    if (value === "isNewArrival") {
      return 'Lo Nuevo'
    }

    if (value === "currency") {
      return 'Moneda'
    }

    if (value === "status") {
      return 'Estado'
    }

    if (value === "isSpecialOffer") {
      return 'Oferta'
    }

    let newValueArray: any = value.split('_')
    //let newValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    newValueArray = newValueArray.map((nombre: string) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase())
    return newValueArray.join(' ');

  }

}
