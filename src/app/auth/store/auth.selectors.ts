import {
  AuthState,
  getAuthLoggedIn,
  getAuthError,
  getAuthUser
} from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// export const selectAuthState = state => state.auth;

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  getAuthLoggedIn
);

export const loginFailureError = createSelector(
  selectAuthState,
  getAuthError
);

export const loggedInUser = createSelector(
  selectAuthState,
  getAuthUser
);
