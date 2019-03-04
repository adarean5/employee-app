import { BackendEmployeesService } from './../services/backend-employees.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module';
import { EmployeesOverviewComponent } from './views/employees-overview/employees-overview.component';
import { EmployeeDetailsComponent } from './views/employee-details/employee-details.component';
import { EmployeeFormComponent } from './elements/employee-form/employee-form.component';
import { NewEmployeeComponent } from './views/new-employee/new-employee.component';
import { ROUTES } from './employee.routes';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    EmployeesOverviewComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    NewEmployeeComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    MaterialModule
  ],
  exports: [],
  providers: [BackendEmployeesService]
})
export class EmployeesModule {
  constructor() {
    console.log('Created employeee module');
  }
}
