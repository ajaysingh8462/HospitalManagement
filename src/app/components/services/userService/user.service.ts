import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpservices: HttpService) { }

  registration(reqdata: any) {

   
    return this.httpservices.postServices('User', reqdata)
  }
  login() {
 
   
    return this.httpservices.getServices('User')
  }
  getDoctors() {
 
   
    return this.httpservices.getServices('Doctors')
  }
  getuser(id:any) {
 
   
    return this.httpservices.getServices('User/'+id)
  }
  addAppointment(reqdata:any){
    return this.httpservices.postServices('Appointment', reqdata)
  }
  getAppointment() {
 
   
    return this.httpservices.getServices('Appointment')
  }
  deleteAppointment(id:any) {
 
   
    return this.httpservices.deleteService('Appointment/'+id)
  }
  addPatient(reqdata:any){
    return this.httpservices.postServices('Patients', reqdata)
  }
}
