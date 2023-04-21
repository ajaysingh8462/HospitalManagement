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
  image:string="../../../assets/profile.png"
  constructor(
    public dialogRef: MatDialogRef<AppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder, private user: UserService,  private snackBar: MatSnackBar
  ) {
    this.drName = this.data.drName;
  }
  image1(){
    this.image="../../../assets/icon/Profile-Pic-1.png"
  }
  image2(){
    this.image="../../../assets/icon/Profile-Pic-2.png"
  }
  image3(){
    this.image="../../../assets/icon/Profile-Pic-3.png"
  }
  image4(){
    this.image="../../../assets/icon/Profile-Pic-4.png"
  }

  ngOnInit(): void {
    const userid = localStorage.getItem("id");
    this.user.getuser(userid).subscribe((response: any) => {
      this.patient = response;
      this.name = this.patient.fullName;
      this.email = this.patient.email;

    });
    this.appointment = this.formBuilder.group({
      name:['', Validators.required],
      Date: ['', Validators.required],
      From: ['', Validators.required],
      To: ['', Validators.required],
      Number: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      Injury: ['', Validators.required],
      

    });
  }
  get f() { return this.appointment.controls; }

  onSubmit() {
    console.log(this.name)
    this.submitted = true;

    // stop here if form is invalid
    if (this.appointment.valid) {
      let payload = {
        Profile:this.image,
        fname :this.appointment.value.name,
        drName:this.drName,
        email:this.email,
        Date : this.appointment.value.Date,
        From :this.appointment.value.From,
        To: this.appointment.value.To,
        Number: this.appointment.value.Number,
        Injury :this.appointment.value.Injury,
        age :this.appointment.value.age,
        address :this.appointment.value.address

      }
      this.user.addPatient(payload).subscribe((ress: any) => {
        console.log(ress);
      });
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
    else{
      console.log('error')
    }

  }
  Cancle(){
    this.dialogRef.close();
  }

}
