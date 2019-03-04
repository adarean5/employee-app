import { Routes } from '@angular/router';
import { EmployeesOverviewComponent } from './views/employees-overview/employees-overview.component';
import { EmployeeDetailsComponent } from './views/employee-details/employee-details.component';
import { NewEmployeeComponent } from './views/new-employee/new-employee.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: EmployeesOverviewComponent
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'new-employee',
    component: NewEmployeeComponent
  }
];
