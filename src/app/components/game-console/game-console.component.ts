import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsoleService } from 'src/app/services/console.service';

@Component({
  selector: 'app-game-console',
  templateUrl: './game-console.component.html',
  styleUrls: ['./game-console.component.scss']
})
export class GameConsoleComponent implements OnInit, OnDestroy {
  consoleEntries: string[] = [];
  consoleSubscription: Subscription = new Subscription();

  constructor(
    private gcs: ConsoleService
  ) { }

  ngOnInit() {
    this.consoleSubscription = this.gcs.latestConsoleEntry.subscribe(
      consoleEntry => this.consoleEntries.push(consoleEntry)
    );
  }

  ngOnDestroy() {
    this.consoleSubscription.unsubscribe();
  }

}
