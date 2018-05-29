import { Component, Input, EventEmitter, Output, OnChanges } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls:['./passenger-detail.component.scss'],
  template:`
    <div>
      <span class="status" [ngClass]="{'checked-in': detail.checkedIn}"></span>
      <div *ngIf="isEditMode">
        <input type="text" #name [value]="detail.name" (input)="onNameChange(name.value)" />
      </div>
      <div *ngIf="!isEditMode">
        {{detail.name}}
      </div>
      <button (click)="toggleEdit()">{{isEditMode ? 'Done' : 'Edit'}}</button>
      <button (click)="onRemove()">Remove</button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  isEditMode: boolean = false;

  ngOnChanges(changes){
    if(changes.detail){
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string): void{
    this.detail.name = value;
  }

  toggleEdit(){
    if (this.isEditMode)
      this.edit.emit(this.detail);

    this.isEditMode = !this.isEditMode;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }
}
