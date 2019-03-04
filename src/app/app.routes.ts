import { AuthGuard } from './auth/auth.guard';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'employees',
    loadChildren: './employees/employees.module#EmployeesModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
