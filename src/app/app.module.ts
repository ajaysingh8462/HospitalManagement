import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


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


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DoctorsComponent,
    DashboradComponent
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
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
