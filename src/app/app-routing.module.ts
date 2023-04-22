import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AuthguardGuard } from './components/authguard/authguard.guard';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [ 
  {path:'', redirectTo:'signin',pathMatch: 'full'},
  {path: 'signup',component: SignupComponent},
  {path: 'signin',component: SigninComponent},
  {path:'dashboard',component:DashboradComponent,canActivate:[AuthguardGuard]}, 
  {path:'dashboard',canActivate:[AuthguardGuard],component:DashboradComponent,children:[
    {path:'doctors',component:DoctorsComponent},
    {path:'appointmentlist',component:AppointmentListComponent},
    {path:'patient',component:PatientComponent}
  ]},
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
