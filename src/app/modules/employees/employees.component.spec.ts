import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee } from 'src/app/@core/models/employee';

import { EmployeesComponent } from './employees.component';
import { EmployeeService } from './service/employee.service';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let employeeService: any;
  const expectedEmployees: Employee[] =
    [{ employeeID: 'employee1', fullName: 'A' }, { employeeID: 'employee2', fullName: 'B' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesComponent, { provide: EmployeeService, useClass: MockUserService }]
    })
    component = TestBed.inject(EmployeesComponent);
    employeeService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employee list after Angular calls ngOnInit', async () => {
    await component.ngOnInit();
    expect(component.employees.length).toBeGreaterThan(1);
  });

  it('should load employee list after Angular calls delete', async () => {
    await component.ngOnInit();
    component.currentEmployeeID = 'employee1'
    component.delete();
    expect(component.employees.length).toEqual(2);
  });

  it('should show modal', async () => {
    component.showModal('')
    expect(component.modalMessage.length).toBeGreaterThan(2);
  });

});

class MockUserService {

  deleteEmployeeByID(key: string): boolean {
    return true
  };

  // tslint:disable-next-line:typedef
  getEmployeeList() {
    return [{ employeeID: 'employee1', fullName: 'A' }, { employeeID: 'employee2', fullName: 'B' }]
  }

};
