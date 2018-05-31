import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Not found! <a routerLink="/">Click here</a> to go home.
    </div>
  `
})
export class NotFoundComponent {}
