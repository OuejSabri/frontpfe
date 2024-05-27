import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCodeComponent } from 'src/app/components/authentification/ajouter-code/ajouter-code.component';
import { ForgetPasswordComponent } from 'src/app/components/authentification/forgot-password/forget-password.component';
import { LoginComponent } from 'src/app/components/authentification/login/login.component';
import { RegisterComponent } from 'src/app/components/authentification/register/register.component';
import { RestPasswordComponent } from 'src/app/components/authentification/rest-password/rest-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  
  {
    path: 'fpassword',
    component : ForgetPasswordComponent
  },
  {
    path: 'AjouterCode',
    component : AjouterCodeComponent
  },
  {
    path : 'resetPassword/:token',
    component : RestPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
