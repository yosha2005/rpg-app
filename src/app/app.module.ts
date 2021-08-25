import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { GetJsonService } from "./services/get-json.service";
import { DiceService } from './services/dice.service';
import { CommonChecksService } from './services/common-checks.service';

import { DisplayNscComponent } from './components/display-nsc/display-nsc.component';
import { GameConsoleComponent } from './components/game-console/game-console.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNscComponent,
    GameConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetJsonService,
    DiceService,
    CommonChecksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
