import { BackendEmployeesService } from './../../../services/backend-employees.service';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  constructor(
    private employeeService: BackendEmployeesService,
    private router: Router
  ) {}

  ngOnInit() {}

  createEmployee(employee: Employee): void {
    this.employeeService
      .createNewEmployee(employee)
      .subscribe((response: any) => {
        this.router.navigate(['employees/']);
      });
  }
}
