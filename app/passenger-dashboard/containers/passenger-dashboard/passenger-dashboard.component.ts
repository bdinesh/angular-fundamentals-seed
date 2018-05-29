import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/Passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: [
    'passenger-dashboard.component.scss'
  ],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <passenger-count [items]="passengers"></passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  ngOnInit(){
    this.passengers = [
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

  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((p: Passenger) => {
      if(p.id === event.id){
        p = Object.assign({}, p, event);
      }

      return p;
    });

    console.log(this.passengers);
  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((p: Passenger) => p.id !== event.id);
  }
}
