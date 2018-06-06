import {Component, Output, EventEmitter, ContentChild, AfterContentInit} from "@angular/core";

import {AuthRememberComponent} from "./auth-remember.component";

@Component({
  selector: 'auth-form',
  template:`
    <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
      <ng-content select="h3"></ng-content>
      <label>
        Email:
        <input #email name="email" type="text" ngModel/>
      </label>
      <label>
        Password:
        <input #password name="password" type="password" ngModel>
      </label>
      <ng-content select="auth-remember"></ng-content>
      <div *ngIf="showMessage">
        Will be logged in for 30 days!
      </div>
      <ng-content select="button"></ng-content>
    </form>
  `
})
export class AuthFormComponent implements AfterContentInit{
  showMessage: boolean = false;

  @ContentChild(AuthRememberComponent)
  authRemember: AuthRememberComponent;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  ngAfterContentInit(): void {
    if(this.authRemember){
      this.authRemember.checked.subscribe((data: boolean) => this.showMessage=data);
    }
  }

  onSubmit(value){
    this.submitted.emit(value);
  }
}

