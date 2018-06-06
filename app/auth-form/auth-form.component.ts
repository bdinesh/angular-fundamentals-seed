import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild
} from "@angular/core";

import {AuthRememberComponent} from "./auth-remember.component";

@Component({
  selector: 'auth-form',
  styles: [`
    .email{
      border-color: #9f72e6;
      border-radius: 5px;
    }
  `],
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
export class AuthFormComponent implements AfterContentInit, AfterViewInit{
  showMessage: boolean = false;

  @ViewChild('email') email: ElementRef;

  @ContentChild(AuthRememberComponent)
  authRemember: AuthRememberComponent;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private renderer: Renderer2){}

  ngAfterContentInit(): void {
    if(this.authRemember){
      this.authRemember.checked.subscribe((data: boolean) => this.showMessage=data);
    }
  }

  ngAfterViewInit(): void {
    // Using Renderer2 to set the attributes of elements
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email');
    this.renderer.addClass(this.email.nativeElement, 'email');
  }

  onSubmit(value){
    this.submitted.emit(value);
  }
}

