import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioritySelect'
})
export class PrioritySelectPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    if(value == 1){
      return "favorite"
    }else{
      return "favorite_border"
    }
    // return null;
  }

}
