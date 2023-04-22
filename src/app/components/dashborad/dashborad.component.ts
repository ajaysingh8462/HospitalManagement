import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../services/data/data.service';
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {
  mobileQuery: MediaQueryList;
searchText:any
  public edited = true;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private _snackBar: MatSnackBar,private data:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    // this.data.newMassage.subscribe((massage)=>{this.searchText=massage})
    // console.log(this.searchText)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout() {
    this.router.navigate(["/signin"])
    this._snackBar.open("you are logged out", "ok", {
      duration: 3000,

    });
    return localStorage.removeItem("id")
  }
  search(event: any) {
    console.log(event);
    this.data.sendmassage(event.target.value)
  }

}
