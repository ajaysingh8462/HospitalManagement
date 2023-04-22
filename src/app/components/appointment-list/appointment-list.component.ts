import { Component,  OnInit,} from '@angular/core';
import { UserService } from '../services/userService/user.service';
import { DataService } from '../services/data/data.service';
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

  patient:any
  textSearch:any

  constructor(private user:UserService,private data:DataService){}
  displayedColumns: string[] = ['Photo', 'Name', 'Email', 'Date','Visit','Number','Doctor','Injury','Action'];
  dataSource:any
  


  ngOnInit() {
    this.data.newMassage.subscribe((massage)=>{this.textSearch=massage})
    console.log(this.textSearch);


    
    const userid = localStorage.getItem("id");
    this.user.getuser(userid).subscribe((response: any) => {
      this.patient = response;
    });
    this.user.getAppointment().subscribe((response: any) => {
      this.dataSource = response?.filter((obj: any) => {
        return obj.email == this.patient.email 
      });
      console.log(this.dataSource);
      
    });
    
  }
  
  deleteApp(id:any){
  
    console.log(id)
    this.user.deleteAppointment(id).subscribe((response: any) => {
      
    });
  }

}
