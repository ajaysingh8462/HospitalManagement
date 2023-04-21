import { Component,  OnInit,} from '@angular/core';
import { UserService } from '../services/userService/user.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

 

  constructor(private user:UserService){}
  displayedColumns: string[] = ['Photo', 'Name', 'Email', 'Date','Visit','Number','Doctor','Injury','Action'];
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
