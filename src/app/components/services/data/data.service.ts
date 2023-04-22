import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private sourceMassage= new BehaviorSubject([])
  newMassage=this.sourceMassage.asObservable();


  sendmassage(massage:any){
    this.sourceMassage.next(massage)
  }
}
