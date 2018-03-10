import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { LoginComponent } from './login-body/login/login.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { CreateQuestionComponent } from './body/new_appointment/new_appointment.component';


const routes: Routes = [
  {
    // localhost:80001/dashboard/
    path: 'dashboard', component: BodyComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'new_appointment', component: CreateQuestionComponent },

    ]
  },
  {
    // localhost:8000/
    path: '', component: LoginBodyComponent, children: [
      { path: '', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
