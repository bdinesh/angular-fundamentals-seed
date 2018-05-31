import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { switchMap } from "rxjs/operators";

import { Passenger } from "../../models/Passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()">
        &lsaquo; Go Back
      </button>
      <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private router: Router, private route: ActivatedRoute, private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((data: Params) => this.passengerService.getPassenger(data.id)))
      .subscribe((data: Passenger) => this.passenger = data);

    // this.passengerService
    //   .getPassenger(4)
    //   .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(passenger: Passenger) {
    this.passengerService
      .updatePassenger(passenger)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, passenger);
      })
  }

  goBack(){
    this.router.navigate(['/passengers']);
  }
}
