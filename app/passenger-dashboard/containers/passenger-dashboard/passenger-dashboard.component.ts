import {Component} from "@angular/core";
import {Passenger} from "../../models/Passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: [
    'passenger-dashboard.component.scss'
  ],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [ngClass]="{'checked-in': passenger.checkedIn}"></span>
          {{ i }}: {{ passenger.name }}
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      name: 'Dinesh',
      checkedIn: true
    },
    {
      id: 2,
      name: 'Srilakshmi',
      checkedIn: false
    },
    {
      id: 3,
      name: 'Sannihith',
      checkedIn: true
    },
    {
      id: 4,
      name: 'Anirudh',
      checkedIn: false
    }
  ];
}
