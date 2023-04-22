import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SigninComponent } from './components/signin/signin.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AppointmentComponent } from './components/appointment/appointment.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthguardService } from './components/authguard/authguard.service';
import {MatMenuModule} from '@angular/material/menu';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import {MatTableModule} from '@angular/material/table';
import { PatientComponent } from './components/patient/patient.component';
import { SearchPipe } from './components/services/pipe/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DoctorsComponent,
    DashboradComponent,
    AppointmentComponent,
    AppointmentListComponent,
    PatientComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTableModule
    
    
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
