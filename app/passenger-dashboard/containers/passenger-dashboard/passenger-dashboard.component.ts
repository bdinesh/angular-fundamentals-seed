import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Passenger } from "../../models/Passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

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
        (view)="handleView($event)"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ) { }

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => {
        this.passengers = data;
      })
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((p: Passenger) => {
          if (p.id === event.id) {
            console.log(p, event);
            p = Object.assign({}, p, event);
          }

          return p;
        })
      });
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((p: Passenger) => p.id !== event.id);
      });
  }

  handleView(passenger: Passenger){
    this.router.navigate(['/passengers', passenger.id]);
  }
}
