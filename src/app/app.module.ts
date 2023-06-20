import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import {ConnectToSpringbootyService} from "./Service/connect-to-springbooty.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CardComponent } from './card/card.component';
import {ApplicationStateService} from "./Service/ApplicationStateService";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [ConnectToSpringbootyService,ApplicationStateService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
