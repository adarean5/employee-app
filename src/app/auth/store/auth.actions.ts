import { Action } from '@ngrx/store';
import { User, AuthCredentials } from '../../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
  LogIn = '[Auth] Login',
  LogInSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LogOut = '[Auth] Logout'
}

export class LogIn implements Action {
  readonly type = ActionTypes.LogIn;
  constructor(public payload: AuthCredentials) {}
}

export class LogInSuccess implements Action {
  readonly type = ActionTypes.LogInSuccess;
  constructor(public payload: User) {}
}

export class LoginFailiure implements Action {
  readonly type = ActionTypes.LoginFailure;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export class LogOut implements Action {
  readonly type = ActionTypes.LogOut;
}

export type AuthActions = LogIn | LogInSuccess | LoginFailiure | LogOut;
