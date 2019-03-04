import { HttpErrorResponse } from '@angular/common/http';
import { loginFailureError } from './../store/auth.selectors';
import { AuthCredentials } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';
import { LogIn } from '../store/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginFailureError$: Observable<any>;
  public loginErrorMessage: string;

  constructor(private store: Store<AuthState>) {
    this.loginFailureError$ = this.store.select(loginFailureError);
  }

  ngOnInit() {
    this.loginFailureError$.subscribe((error: HttpErrorResponse) => {
      if (error && error.status === 401) {
        this.loginErrorMessage = 'Authentication credentials not valid';
      } else if (error) {
        this.loginErrorMessage = error.message;
      } else {
        this.loginErrorMessage = '';
      }
    });
  }

  logIn(authCredentials: AuthCredentials): void {
    this.store.dispatch(new LogIn(authCredentials));
  }
}
