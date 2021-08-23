import { Injectable } from '@angular/core';
import { DiceService } from './dice.service';

@Injectable({
  providedIn: 'root'
})
export class CommonChecksService {

  constructor(private dice: DiceService) { }

  attack(at: number | any, tp: number[]) {
    const result = this.dice.roll(1, 20);

    if (at >= result[0]) {
      console.log('Attacke erfolgreich');

      let trefferpunkte = 0;
      this.dice.roll(tp[0], tp[1]).forEach(el => trefferpunkte += el);
      trefferpunkte += tp[2];
      console.log('TP: ' + trefferpunkte);
    } else {
      console.log('Attacke fehlgeschlagen');
    }
  }

  parry(pa: number | any) {
    const result = this.dice.roll(1, 20);

    if (pa >= result[0]) {
      console.log('Parade erfolgreich');
    } else {
      console.log('Parade fehlgeschlagen');
    }
  }
}
