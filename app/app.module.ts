import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { AuthFormModule} from "./auth-form/auth-form.module";

import { HomeComponent } from "./home.component";
import {AppComponent} from './app.component';
import { NotFoundComponent } from './not-found.component';
import {AuthContainerComponent} from "./auth-form/containers/auth-container.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'auth', component: AuthContainerComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule,
    AuthFormModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class AppModule {
}
