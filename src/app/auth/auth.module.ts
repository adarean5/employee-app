import { AuthEffects } from './store/auth.effect';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './auth.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { authReducers } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginFormComponent } from './elements/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService]
})
export class AuthModule {
  constructor() {
    console.log('Created auth module');
  }
}
