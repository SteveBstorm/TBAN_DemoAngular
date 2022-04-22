import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurtobtc'
})
export class EurtobtcPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return ''+(value / 37638) + " btc"
  }

}
