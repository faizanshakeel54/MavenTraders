import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { from } from 'rxjs';
import { SignupPageComponent } from './signup-page/signup-page.component';


@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginPageComponent,
    SignupPageComponent
  ]
})
export class LoginModule { }
