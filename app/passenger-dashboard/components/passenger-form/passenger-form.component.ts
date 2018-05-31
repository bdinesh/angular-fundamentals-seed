import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";
import { Baggage } from "../../models/Baggage.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      <div>
        Passenger Name:
        <input type="text" #name="ngModel" name="name" [ngModel]="detail?.name" required />
        <div *ngIf="name.errors?.required && name.dirty" class="error">
          Name required
        </div>
      </div>

      <div>
        Passenger ID:
        <input type="number" #id="ngModel" name="id" [ngModel]="detail?.id" required />
        <div *ngIf="id.errors?.required && id.dirty" class="error">
          ID required
        </div>
      </div>

      <div>
        <label>
          <input type="radio" [value]="true" name="checkedIn"
            [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)" />
          Yes
        </label>
        <label>
          <input type="radio" [value]="false" name="checkedIn"
            [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)" />
          No
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkedInDate" [ngModel]="detail?.checkedInDate" />
      </div>

      <div>
        Lagguage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option *ngFor="let item of baggage" [ngValue]="item.key">
            {{item.value}}
          </option>
        </select>
      </div>

      <div>
        <button type="submit" [disabled]="form.invalid">
          Update Passenger
        </button>
      </div>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
      key: 'hand-only',
      value: 'Hand baggage'
    }, {
      key: 'hold-only',
      value: 'Hold baggage'
    }, {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }]

  toggleCheckIn(checkedIn: boolean){
    if(checkedIn)
      this.detail.checkedInDate = Date.now();
  }

  handleSubmit(passenger: Passenger, isValid: boolean){
    if(isValid){
      this.update.emit(passenger);
    }
  }
}
