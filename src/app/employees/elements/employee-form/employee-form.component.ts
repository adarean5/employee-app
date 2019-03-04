import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl(''),
    insertionDate: new FormControl('')
  });

  private _formDisabled = false;

  get formDisabled(): boolean {
    return this._formDisabled;
  }

  @Input()
  set formDisabled(value: boolean) {
    this._formDisabled = value;
    if (this.formDisabled) {
      this.employeeForm.disable();
    } else {
      this.employeeForm.enable();
    }
  }

  @Input()
  set employeeModel(employee: Employee) {
    if (employee === undefined) {
      return;
    }
    console.log('Employee from form:', employee);
    this.employeeForm.patchValue(employee);
  }
  // employee: Employee;
  @Output()
  submitEmitter: EventEmitter<Employee> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  editEmployee(): void {
    this.submitEmitter.emit(this.employeeForm.value);
  }
}
