import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a *ngFor="let item of navItems"
          [routerLink]=item.link routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: item.exact}">
          {{item.name}}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  navItems = [
    {link: '/auth', name: 'Auth', exact: false},
    {link: '/', name:'Home', exact: true},
    {link: '/passengers', name:'Passengers', exact: false},
    {link: '/oops', name:'404', exact: false}
  ];

  constructor() {}
}
