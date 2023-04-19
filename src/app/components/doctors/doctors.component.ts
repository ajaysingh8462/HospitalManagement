import { Component } from '@angular/core';
import { AppointmentComponent } from '../appointment/appointment.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {

  constructor(private dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '30%',
      // heigth: 'auto',
      panelClass: 'updateDialog',
      
      
    });
   
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
     
      
    });
  }
  

}
