import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/includes/services/auth.service';

import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../includes/components/snackbar/snackbar.component';
import { ErrorService } from 'src/app/includes/services/error.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error = '';
  userForm: FormGroup;
  durationInSeconds = 3;
  errorMsgs = this._error.errMsgs;

  constructor(private fb: FormBuilder, private _auth: AuthService, private _snackBar: MatSnackBar, private _error: ErrorService) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }


  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  onSubmit() {
    console.log(this.userForm.value);
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;
    this._auth.signUp(email, password)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          // this.error = this.errorMsgs[err]
          console.log(this.errorMsgs);
          console.log(err);
        }
      )
  }

}
