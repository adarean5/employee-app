import { User } from './../../models/user.model';
import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import {
  LogIn,
  ActionTypes,
  LogInSuccess,
  LoginFailiure,
  LogOut,
  AuthActions
} from './auth.actions';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { defer, of, Observable } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  logIn$: Observable<LogInSuccess | LoginFailiure> = this.actions$.pipe(
    ofType<LogIn>(ActionTypes.LogIn),
    map((action: LogIn) => action.payload),
    switchMap(authCredentials => {
      return this.authService.login(authCredentials).pipe(
        map(user => {
          return new LogInSuccess(user);
        }),
        catchError(error => {
          return of(new LoginFailiure({ error }));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<any> = this.actions$.pipe(
    ofType<LogInSuccess>(ActionTypes.LogInSuccess),
    map((action: LogInSuccess) => action.payload),
    tap((user: User) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/employees');
    })
  );

  @Effect({ dispatch: false })
  logOut$: Observable<any> = this.actions$.pipe(
    ofType<LogOut>(ActionTypes.LogOut),
    tap((action: LogOut) => {
      localStorage.removeItem('user'), this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user: User = JSON.parse(userData);
      return of(new LogInSuccess(user)) as Observable<LogInSuccess | LogOut>;
    } else {
      return of(new LogOut()) as Observable<LogInSuccess | LogOut>;
    }
  });
}
