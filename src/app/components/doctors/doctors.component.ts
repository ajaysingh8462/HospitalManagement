import { Component, OnInit } from '@angular/core';
import { AppointmentComponent } from '../appointment/appointment.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/userService/user.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctorsDeatils:any

  constructor(private dialog: MatDialog,private user:UserService){}

  ngOnInit(): void {
    this.user.getDoctors().subscribe((response: any) => {
      this.doctorsDeatils=response;
      // console.log(this.doctorsDeatils)
      // console.log(this.data);
    });
  }
  openDialog(details:any): void {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '30%',
      // heigth: 'auto',
      panelClass: 'updateDialog',
      data:details
     
      
      
    });
   
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
     
      
    });
  }

  
  

}
