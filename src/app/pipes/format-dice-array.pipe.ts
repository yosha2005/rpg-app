import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDiceArray'
})
export class FormatDiceArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
