import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  str:string="";
  transform(value:string, ...args: unknown[]): string {

   return this.str=`${value.substring(0,4)}-${value.substring(4,8)}-${value.substring(8,12)}-${value.substring(12,16)}`;
  }

}
