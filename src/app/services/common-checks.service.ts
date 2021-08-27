import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';
import { DiceService } from './dice.service';

@Injectable({
  providedIn: 'root'
})
export class CommonChecksService {

  constructor(
    private dice: DiceService,
    private gc: ConsoleService
  ) { }

  attack(at: number | any, tp: number[]) {
    const result = this.dice.roll(1, 20);

    if (at >= result[0]) {
      this.gc.print('Attacke erfolgreich');

      let trefferpunkte = 0;
      this.dice.roll(tp[0], tp[1]).forEach(el => trefferpunkte += el);
      trefferpunkte += tp[2];
      this.gc.print(String('TP: ' + trefferpunkte));
    } else {
      this.gc.print('Attacke fehlgeschlagen');
    }
  }

  parry(pa: number | any) {
    const result = this.dice.roll(1, 20);

    if (pa >= result[0]) {
      this.gc.print('Parade erfolgreich');
    } else {
      this.gc.print('Parade fehlgeschlagen');
    }
  }
}
