import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rpg-app';

  throwDice(numberOfDice: number, sides: number) {
    const results = [];

    for (let i = 0; i < numberOfDice; i++) {
      results.push(Math.floor(Math.random() * sides));
    }
    
    console.log(results);
  
    // return results;
  }
}
