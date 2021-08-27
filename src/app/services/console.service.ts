import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private consoleObservable = new BehaviorSubject('Console started');
  latestConsoleEntry = this.consoleObservable.asObservable();

  constructor() { }

  print(str: string) {
    this.consoleObservable.next(str);
  }
}
