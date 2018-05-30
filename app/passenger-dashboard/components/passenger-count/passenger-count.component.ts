import { Component, Input, OnChanges } from "@angular/core"
import { Passenger } from "../../models/Passenger.interface";

@Component({
  selector: 'passenger-count',
  styleUrls: [],
  template: `
    <div>
      Total checked in passengers: {{getCheckedInCount()}}/{{ items?.length }}
    </div>
  `
})
export class PassengerCountComponent implements OnChanges {
  @Input()
  items: Passenger[];

  ngOnChanges(changes) {
    if (changes.items.currentValue) {
      this.items = changes.items.currentValue.slice(0);
    }
  }

  getCheckedInCount(): number {
    if (!this.items) return;
    return this.items.filter((p: Passenger) => p.checkedIn).length;
  }
}
