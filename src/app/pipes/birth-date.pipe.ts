import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDate'
})
export class BirthDatePipe implements PipeTransform {
 str:string="";
  transform(value:string, ...args: unknown[]): string {
    let yy=`19${value.substring(1,3)}`;
    let mm=`${value.substring(3,5)}`;
    let dd=`${value.substring(5,7)}`
   this.str=`${dd}-${mm}-${yy}`;
   return this.str;
  }

}
