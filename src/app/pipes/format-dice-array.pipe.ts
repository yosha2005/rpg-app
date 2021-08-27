import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDiceArray'
})
export class FormatDiceArrayPipe implements PipeTransform {

  transform(value: number[]): string {
    let diceString: string = '';

    diceString += String(value[0]) + 'W' + String(value[1]);

    if (value[2] != undefined) {
      const mod: number = Math.abs(value[2]);
      if (value[2] > 0) {
        diceString += '+' + mod;
      } else if (value[2] < 0) {
        diceString += '-' + mod;
      }
    }

    return diceString;
  }

}
