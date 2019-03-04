import { HttpErrorResponse } from '@angular/common/http';
import { User } from './../../models/user.model';
import { AuthActions, ActionTypes } from './auth.actions';

export interface AuthState {
  loggedIn: boolean;
  user: User;
  error: HttpErrorResponse;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined,
  error: undefined
};

export function authReducers(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case ActionTypes.LogInSuccess:
      return {
        loggedIn: true,
        user: action.payload,
        error: undefined
      };
    case ActionTypes.LoginFailure:
      return {
        ...initialAuthState,
        error: action.payload.error
      };
    case ActionTypes.LogOut:
      return {
        ...initialAuthState
      };

    default:
      return state;
  }
}

export const getAuthLoggedIn = (state: AuthState) => state.loggedIn;
export const getAuthUser = (state: AuthState) => state.user;
export const getAuthError = (state: AuthState) => state.error;
