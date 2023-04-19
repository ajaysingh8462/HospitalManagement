import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  login!: FormGroup;
  availableData: any
  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router, private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.login.controls; }

  onSubmit() {

    let Check: boolean = false;

    if (this.login.valid) {
      let result = {
        email: this.login.value.email,
        password: this.login.value.password
      }
      this.user.login().subscribe((response: any) => {

        console.log(response);

        for (let data of response) {
          if (data.email == result.email && data.password == result.password) {
            this.availableData = data;
            Check = true;
            localStorage.setItem('id', data.id);
            this.router.navigate(['/dashboard/doctors']);

            this.snackBar.open('Login Successfull...', 'Dismiss', {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
          }
        }

        if (Check == false) {
          this.snackBar.open('Login Unsuccessfull...', 'Dismiss', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          })
        }
      })
    }
  }

}
