import { Component } from '@angular/core';

@Component({
  selector: 'app-game-console',
  templateUrl: './game-console.component.html',
  styleUrls: ['./game-console.component.scss']
})
export class GameConsoleComponent {
  consoleEntries = ['Affe', 'Banane', 'Chimäre'];

  constructor() { }

}
