import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {
}
