import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { AuthResponse } from '../models/authResponse';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  apiKey = "AIzaSyDwPvzztnCNcGjFfL3Z-pkbDFHcNFjIngs"

  constructor(private http: HttpClient, private _error: ErrorService) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(
      catchError( err => {
        return this._error.handleError(err)
      })
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
      .pipe(
        catchError( err => {return this._error.handleError(err)})
      )
  }


}
