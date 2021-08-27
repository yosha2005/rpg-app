import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { CommonChecksService } from './services/common-checks.service';
import { DiceService } from './services/dice.service';
import { ConsoleService } from './services/console.service';
import { GetJsonService } from "./services/get-json.service";

import { DisplayNscComponent } from './components/display-nsc/display-nsc.component';
import { GameConsoleComponent } from './components/game-console/game-console.component';

import { FormatDiceArrayPipe } from './pipes/format-dice-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNscComponent,
    GameConsoleComponent,
    FormatDiceArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommonChecksService,
    ConsoleService,
    DiceService,
    GetJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
