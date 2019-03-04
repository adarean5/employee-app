import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendEmployeesService } from '../../../services/backend-employees.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private employeeId: string;
  protected employee: Employee;
  protected formDisabled = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: BackendEmployeesService
  ) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.getEmployee(this.employeeId);
  }

  getEmployee(id: string): void {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (response: Employee) => {
        this.employee = response;
      },
      error => {
        console.log('Error getting employee');
      }
    );
  }

  updateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        this.router.navigate(['employees/']);
      },
      error => {
        console.log('Error updating employee', error);
      }
    );
  }

  deleteEmployee(): void {
    this.employeeService
      .deleteEmployee(this.employeeId)
      .subscribe((response: any) => {
        this.router.navigate(['employees/']);
      });
  }

  toggleEditing(): void {
    this.formDisabled = !this.formDisabled;
  }
}
