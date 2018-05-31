import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  template: `
    <div>
      {{title}}
    </div>
  `
})
export class HomeComponent {
  title: string = 'Welcome to Angular!';
}
