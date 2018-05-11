import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSecction'
})
export class FilterSecctionPipe implements PipeTransform {
inputValue;
  transform(value: any): any {
    return value.toUpperCase();
    }
  }

