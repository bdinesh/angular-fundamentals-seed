import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FormsModule } from "@angular/forms";

import {AuthContainerComponent} from "./containers/auth-container.component";
import {AuthFormComponent} from "./auth-form.component";
import {AuthRememberComponent} from "./auth-remember.component";

@NgModule({
  declarations: [
    AuthContainerComponent,
    AuthFormComponent,
    AuthRememberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthContainerComponent,
    AuthFormComponent
  ]
})
export class AuthFormModule{}
