import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgetPasswordComponent } from 'src/app/components/authentification/forgot-password/forget-password.component';
import { LoginComponent } from 'src/app/components/authentification/login/login.component';
import { RegisterComponent } from 'src/app/components/authentification/register/register.component';
import { RestPasswordComponent } from 'src/app/components/authentification/rest-password/rest-password.component';
import { PrimeNgModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    RestPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNgModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
