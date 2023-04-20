import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/userService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  name: any
  drName: any
  email: any
  patient: any
  appointment!: FormGroup;
  submitted: boolean=false;



  constructor(
    public dialogRef: MatDialogRef<AppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder, private user: UserService,  private snackBar: MatSnackBar
  ) {
    this.drName = this.data.drName;


  }

  ngOnInit(): void {
    const userid = localStorage.getItem("id");
    this.user.getuser(userid).subscribe((response: any) => {
      this.patient = response;
      this.name = this.patient.fullName;
      this.email = this.patient.email;

    });
    this.appointment = this.formBuilder.group({
      name: ['', Validators.required],
      drName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Date: ['', Validators.required],
      From: ['', Validators.required],
      To: ['', Validators.required],
      Number: ['', Validators.required],
      Injury: ['', Validators.required],

    });
  }
  get f() { return this.appointment.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.appointment.valid) {
      let payload = {
        fname :this.appointment.value.name,
        drName:this.appointment.value.drName,
        email:this.appointment.value.email,
        Date : this.appointment.value.Date,
        From :this.appointment.value.From,
        To: this.appointment.value.To,
        Number: this.appointment.value.Number,
        Injury :this.appointment.value.Injury

      }
      this.user.addAppointment(payload).subscribe((response: any) => {
        console.log(response);
        this.dialogRef.close();
        this.snackBar.open("Appointment add successfully", "ok", {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'

        });

      });
      
       
        
      
    }

  }
  Cancle(){
    this.dialogRef.close();
  }

}
