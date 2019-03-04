import { GenderPipePipe } from './../../../widgets/pipes/gender-pipe.pipe';
import { TableRow } from './../../../widgets/table/table.model';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BackendEmployeesService } from '../../../services/backend-employees.service';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';

const RECENT_ROW_COLOR = '#80cbc4';

@Component({
  selector: 'app-employees-overview',
  templateUrl: './employees-overview.component.html',
  styleUrls: ['./employees-overview.component.css'],
  providers: [DatePipe, GenderPipePipe]
})
export class EmployeesOverviewComponent implements OnInit {
  public tableHeaders = ['First name', 'Last name', 'Gender', 'Insertion date'];
  public tableData: TableRow[];

  constructor(
    private backendEmployeesService: BackendEmployeesService,
    private datePipe: DatePipe,
    private genderPipe: GenderPipePipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    const dateMonthAgo = new Date().getTime() - 1000 * 60 * 60 * 24 * 30;

    this.backendEmployeesService.getAllEmployees().subscribe(
      (response: Employee[]) => {
        console.log(response);
        this.tableData = response.map((employee: Employee) => {
          const tableRow: TableRow = {
            columns: [
              employee.firstName,
              employee.lastName,
              this.datePipe.transform(employee.insertionDate),
              this.genderPipe.transform(employee.gender)
            ],
            rowColor:
              new Date(employee.insertionDate).getTime() > dateMonthAgo
                ? RECENT_ROW_COLOR
                : '',
            link: String(employee.id)
          };
          console.log(tableRow);
          return tableRow;
        });
      },
      error => {
        console.log('There was a problem getting employees.');
      }
    );
  }

  displayEmployeeDetails(id: number): void {
    console.log('Id from parent', id);
    this.router.navigate([`employees/employee-details/${id}`]);
  }

  addEmployee(): void {
    this.router.navigate(['employees/new-employee']);
  }
}
