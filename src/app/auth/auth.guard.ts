import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthActions } from './store/auth.actions';
import { isLoggedIn } from './store/auth.selectors';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store<AuthActions>, private router: Router) {}

  canLoad(route: Route): Observable<boolean> {
    return this.checkLogin();
  }

  canActivate(route: Route): Observable<boolean> {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      take(1),
      tap((loggedIn: boolean) => {
        if (!loggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
