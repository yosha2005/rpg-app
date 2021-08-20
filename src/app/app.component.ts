import { Component, OnInit } from '@angular/core';
import { GetJsonService } from './services/get-json.service';

import { nsc } from '../assets/types/nsc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rpg-app';

  buergerin = <nsc>{};

  constructor(private getJson: GetJsonService) {};

  ngOnInit() {
    this.getJson.getNsc('buergerin').subscribe(results => this.buergerin = Object.assign(this.buergerin, results));
  }

  throwDice(numberOfDice: number, sides: number) {
    const results = [];

    for (let i = 0; i < numberOfDice; i++) {
      results.push(Math.floor(Math.random() * sides));
    }
    
    console.log(results);
    console.log(this.buergerin);
    
  
    // return results;
  }
}
