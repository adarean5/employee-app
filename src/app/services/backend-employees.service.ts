import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee.model';

@Injectable()
export class BackendEmployeesService {
  private employeeAPIAddress = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) {}

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeAPIAddress + 'employees');
  }

  public getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.employeeAPIAddress + `employees/${id}`);
  }

  public createNewEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      this.employeeAPIAddress + 'employees',
      employee
    );
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      this.employeeAPIAddress + 'employees',
      employee
    );
  }

  public deleteEmployee(id: string): Observable<any> {
    return this.http.delete(this.employeeAPIAddress + `employees/${id}`);
  }
}
