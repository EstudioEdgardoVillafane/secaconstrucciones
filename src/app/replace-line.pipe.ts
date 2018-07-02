import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLine'
})
export class ReplaceLinePipe implements PipeTransform {

  replaceLineForSpace;
  transform(VarJson: any): any {
    this.replaceLineForSpace = VarJson.replace(/-/g,' ');
  return this.replaceLineForSpace;
  }

}
