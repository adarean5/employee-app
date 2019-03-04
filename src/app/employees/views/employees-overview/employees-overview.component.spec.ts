import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOverviewComponent } from './employees-overview.component';

describe('EmployeesOverviewComponent', () => {
  let component: EmployeesOverviewComponent;
  let fixture: ComponentFixture<EmployeesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
