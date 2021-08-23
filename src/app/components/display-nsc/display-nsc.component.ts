import { Component, Input } from '@angular/core';

import { DiceService } from 'src/app/services/dice.service';
import { CommonChecksService } from 'src/app/services/common-checks.service';

import { nsc } from 'src/assets/types/nsc';

@Component({
  selector: 'app-display-nsc',
  templateUrl: './display-nsc.component.html',
  styleUrls: ['./display-nsc.component.scss']
})
export class DisplayNscComponent {
  @Input() nsc = <nsc>{};

  constructor(
    private dice: DiceService,
    private check: CommonChecksService
  ) { }

  attack(at: number | any, tp: number[]) {
    this.check.attack(at, tp);
  }

  parry(pa: number | any) {
    this.check.parry(pa);
  }
}
