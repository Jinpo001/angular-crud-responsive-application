import { of } from 'rxjs';
import { DynamicComponentConfig, CustomTextBox } from 'src/app/@core/configs/dynamic-component-config';
import { Employee } from 'src/app/@core/models/employee';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpServiceSpy: { getPromise: jasmine.Spy, postPromise: jasmine.Spy, putPromise: jasmine.Spy, deletePromise: jasmine.Spy };
  const expectedEmployees: Employee[] =
    [{ employeeID: 'employee1', fullName: 'A' }, { employeeID: 'employee2', fullName: 'B' }];
  const dynamicComponentConfig: DynamicComponentConfig<string> =
    new CustomTextBox({
      name: 'customInput',
      key: 'employeeID',
      type: 'text',
      label: 'Employee ID:',
      readonly: false,
      value: '',
      required: true,
      order: 1
    })

  beforeEach(() => {
    httpServiceSpy = jasmine.createSpyObj('HttpService', ['getPromise', 'postPromise', 'putPromise', 'deletePromise']);
    service = new EmployeeService(httpServiceSpy as any);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return expected Components', () => {

    httpServiceSpy.getPromise.and.returnValue(of(expectedEmployees).toPromise());
    service.getComponents('employee1', 'view').then(
      item => expect(item[1]['name']).toEqual('customInput'),
      fail
    );
  });


  it('should return expected Employee List ', () => {

    httpServiceSpy.getPromise.and.returnValue(of(expectedEmployees).toPromise());
    service.getEmployeeList().then(
      item => expect(item).toEqual(expectedEmployees),
      fail
    );
  });


  it('should return expected Employee List , employee list is not empty ', () => {
    service.employees = expectedEmployees
    httpServiceSpy.getPromise.and.returnValue(of(expectedEmployees).toPromise());
    service.getEmployeeList().then(
      item => expect(item).toEqual(expectedEmployees),
      fail
    );
  });

  it('should return expected boolean (deleteEmployeeByID)', () => {

    service.employees = expectedEmployees;

    service.deleteEmployeeByID('employee1').then(
      item => expect(item).toBe(true),
      fail
    );
  });


  it('should return expected boolean (updateEmployee)', () => {
    service.employees = expectedEmployees;
    expect(service.updateEmployee(expectedEmployees[0])).toBe(true)
  });

  it('should return expected boolean (updateEmployee ,but employee is not in the list)', () => {
    service.employees = expectedEmployees;
    expect(service.updateEmployee({ employeeID: 'employee3', fullName: 'C' })).toBe(true)
  });

});
