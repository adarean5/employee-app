import { TestBed } from '@angular/core/testing';

import { BackendEmployeesService } from './backend-employees.service';

describe('BackendEmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendEmployeesService = TestBed.get(BackendEmployeesService);
    expect(service).toBeTruthy();
  });
});
