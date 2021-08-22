import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  roll(numberOfDice: number, sides: number) {
    const results = [];

    for (let i = 0; i < numberOfDice; i++) {
      results.push(Math.floor(Math.random() * sides));
    }

    return results;
  }

  modifiedRoll(numberOfDice: number, sides: number, modifier: number) {
    return this.roll(numberOfDice, sides).forEach(el => el += modifier);
  }
}
