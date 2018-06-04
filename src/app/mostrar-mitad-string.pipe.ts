import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMitadString'
})
export class MostrarMitadStringPipe implements PipeTransform {

  transform(value: any): any {
    
    return value.splice(0,3);
  }

}
