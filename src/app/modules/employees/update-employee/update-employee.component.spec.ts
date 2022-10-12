import { TestBed } from '@angular/core/testing';
import { ParamMap, Params, convertToParamMap, ActivatedRoute, Router } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { Employee } from 'src/app/@core/models/employee';
import { EmployeeService } from '../service/employee.service';

import { UpdateEmployeeComponent } from './update-employee.component';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let employeeService: any;
  let activatedRoute: any;
  const expectedEmployees: Employee[] =
    [{ employeeID: 'employee1', fullName: 'A' }, { employeeID: 'employee2', fullName: 'B' }];


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateEmployeeComponent,
        { provide: EmployeeService, useClass: MockUserService },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Router, useClass: RouteStub }]
    })
    component = TestBed.inject(UpdateEmployeeComponent);
    employeeService = TestBed.inject(EmployeeService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employee list after Angular calls ngOnInit', () => {
    component.ngOnInit();
    activatedRoute.setParamMap(['employee1', 'view']);
    expect(component.dynamicComponents.length).not.toBeNull();
  });

});


class MockUserService {

  getComponents(employID: string, viewType: string): Promise<any> {
    return of(2).toPromise()
  }

  // tslint:disable-next-line:typedef
  updateEmployee(employee: Employee): boolean {
    return true
  }

}

class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  subject = new ReplaySubject<ParamMap>();

  /** The mock paramMap observable */
  paramMap = this.subject.asObservable();

  /** Set the paramMap observables's next value */
  // tslint:disable-next-line:typedef
  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }
}

class RouteStub {

  navigate(params?: Params): boolean {
    return true;
  }
}
