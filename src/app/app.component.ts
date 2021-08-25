// TODO: create dice service

import { Component, OnInit } from '@angular/core';
import { DiceService } from './services/dice.service';
import { GetJsonService } from './services/get-json.service';

import { NSC } from '../assets/types/nsc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rpg-app';

  buergerin = <NSC>{};

  constructor(
    private getJson: GetJsonService,
    private dice: DiceService
  ) {};

  ngOnInit() {
    this.getJson.getNsc('buergerin').subscribe(results => this.buergerin = Object.assign(this.buergerin, results));
  }
}
