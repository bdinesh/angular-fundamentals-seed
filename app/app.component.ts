import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h2>{{title}}</h2>
    </div>

    <passenger-dashboard></passenger-dashboard>
    <passenger-viewer></passenger-viewer>
  `
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Welcome to Angular!';
  }
}
