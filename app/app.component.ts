import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{title}}
      <div>
        <input id="firstname" [ngModel]="name" (ngModelChange)="handleChange($event)"/>
        <input id="lastname" [(ngModel)]="name"/>
      </div>
    </div>
    <div>
      <input #mobile>
      <button (click)="handleClick(mobile.value)">Get Value</button>
      <label>{{ mobileNumber }}</label>
    </div>
  `
})

export class AppComponent {
  title: string;
  name: string = 'Dinesh';
  mobileNumber: string;

  constructor() {
    this.title = 'Learning Angular!';
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleClick(value:  string) {
    console.log(value);
    this.mobileNumber = value;
  }
}
