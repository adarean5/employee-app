import { LogOut } from './auth/store/auth.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthState } from './auth/store/auth.reducer';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { loggedInUser } from './auth/store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-app';
  currentDate = new Date();
  user$: Observable<User>;
  userName: string;

  constructor(private store: Store<AuthState>) {
    this.user$ = this.store.select(loggedInUser);
  }

  ngOnInit() {
    this.user$.subscribe((user: User) => {
      this.userName = user ? user.userName : '';
    });
  }

  public logOut(): void {
    this.store.dispatch(new LogOut());
  }
}
