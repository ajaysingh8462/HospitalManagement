import { Component } from '@angular/core';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  constructor(private user:UserService){}
  displayedColumns: string[] = ['Photo', 'Name', 'Id','Age', 'address','Number','LastVisit','Status','Action'];
  dataSource:any
  


  ngOnInit() {
    this.user.getAppointment().subscribe((response: any) => {
      this.dataSource=response;
      
    });
    
  }
  
  deleteApp(id:any){
  
    console.log(id)
    this.user.deleteAppointment(id).subscribe((response: any) => {
      
    });
  }
}
