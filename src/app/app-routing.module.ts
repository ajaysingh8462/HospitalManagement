import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { DoctorsComponent } from './components/doctors/doctors.component';

const routes: Routes = [ 
  {path:'', redirectTo:'signin',pathMatch: 'full'},
  {path: 'signup',component: SignupComponent},
  {path: 'signin',component: SigninComponent},
  {path:'dashborad',component:DashboradComponent,children:[{path:'doctors',component:DoctorsComponent}]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
