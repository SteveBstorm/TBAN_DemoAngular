import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let seconde = value % 60
    let minute = Math.floor(value /60)
    let result = (minute < 10 ? '0' : '') + minute + " minute"+(minute < 2 ? '' : 's') + ' ' + (seconde < 10 ? '0' : '') + seconde + ' secondes'
    return result;
  }

}
