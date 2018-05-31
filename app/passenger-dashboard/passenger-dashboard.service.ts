import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Passenger } from "./models/Passenger.interface";

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Object> {
    return this.http.get(PASSENGER_API);
  }

  getPassenger(passengerId: number): Observable<Object> {
    return this.http.get(`${PASSENGER_API}/${passengerId}`);
  }

  updatePassenger(passenger: Passenger): Observable<Object> {
    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger);
  }

  removePassenger(passenger: Passenger): Observable<Object> {
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`);
  }
}
