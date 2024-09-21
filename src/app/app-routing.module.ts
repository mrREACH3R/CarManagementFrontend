import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CarListComponent } from './car-list/car-list.component';
import { ErrorLandingComponent } from './error-landing/error-landing.component';
import { CarTopComponent } from './car-top/car-top.component';
import { CarByIdComponent } from './car-by-id/car-by-id.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import { CarUpdateComponent } from './car-update/car-update.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'cars',component:CarListComponent},
  {path:'cars/top',component:CarTopComponent},
  {path:'cars/get',component:CarByIdComponent},
  {path:'cars/delete',component:CarDeleteComponent},
  {path:'cars/update',component:CarUpdateComponent},
  {path:'cars/:id',component:CarDetailsComponent},
  {path:'**',component:ErrorLandingComponent},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
