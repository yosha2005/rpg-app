import { Component, Input } from '@angular/core';

import { DiceService } from 'src/app/services/dice.service';

import { nsc } from 'src/assets/types/nsc';

@Component({
  selector: 'app-display-nsc',
  templateUrl: './display-nsc.component.html',
  styleUrls: ['./display-nsc.component.scss']
})
export class DisplayNscComponent {
  @Input() nsc = <nsc>{};

  constructor(private dice: DiceService) { }

  rollAttack(at: number | any, tp: number[]) {
    const result = this.dice.roll(1, 20);

    if (at >= result[0]) {
      console.log('Attacke erfolgreich');
      // TODO: create sum of dice results

      let trefferpunkte = 0;
      this.dice.roll(tp[0], tp[1]).forEach(el => trefferpunkte += el);
      trefferpunkte += tp[2];
      console.log('TP: ' + trefferpunkte);
    } else {
      console.log('Attacke fehlgeschlagen');
    }
  }

  rollParry(pa: number | any) {
    const result = this.dice.roll(1, 20);

    if (pa >= result[0]) {
      console.log('Parade erfolgreich');
    } else {
      console.log('Parade fehlgeschlagen');
    }
  }
}
