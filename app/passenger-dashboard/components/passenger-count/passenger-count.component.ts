import {Component, Input} from "@angular/core"
import { Passenger } from "../../models/Passenger.interface";

@Component({
  selector:'passenger-count',
  styleUrls: [],
  template:`
    <div>
      Total checked in passengers: {{getCheckedInCount()}}/{{ items.length }}
    </div>
  `
})
export class PassengerCountComponent{
  @Input()
  items: Passenger[];

  getCheckedInCount():number{
    if(!this.items) return;
    return this.items.filter((p:Passenger) => p.checkedIn).length;
  }
}
