import {Component} from "@angular/core";

@Component({
  selector: 'auth-container',
  template:`
    <auth-form (submitted)="registerUser($event)">
      <h3>Register</h3>
      <button type="submit">Register</button>
    </auth-form>
    <auth-form (submitted)="loginUser($event)">
      <h3>Login</h3>
      <auth-remember (checked)="onRememberUser($event)"></auth-remember>
      <button type="submit">Login</button>
    </auth-form>
  `
})
export class AuthContainerComponent{
  rememberUser: boolean = false;


  onRememberUser(value: boolean) {
    this.rememberUser = value;
  }

  loginUser(user) {
    console.log('Login', user, this.rememberUser);
  }

  registerUser(user) {
    console.log('Register', user, this.rememberUser);
  }
}
