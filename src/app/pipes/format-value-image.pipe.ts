import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatValueImage'
})
export class FormatValueImagePipe implements PipeTransform {

  transform(value: any, nombre: any): any {
    let newValue = value;
    if (nombre == "imageUrls") {
      const url = value[0];
      newValue = `<img src = "${url}"  width="50px" height="50px"  alt="" />`
    }
    return newValue;
  }

}
