import { of } from 'rxjs';
import { Employee } from '../models/employee';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };
  const expectedEmployees: Employee[] =
    [{ employeeID: 'employee1', fullName: 'A' }, { employeeID: 'employee2', fullName: 'B' }];
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new HttpService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected employees (HttpClient called once)', () => {

    httpClientSpy.get.and.returnValue(of(expectedEmployees));

    service.getPromise('').then(
      employees => expect(employees).toEqual(expectedEmployees, 'expected employees'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  it('should return expected boolean', () => {

    httpClientSpy.delete.and.returnValue(of(true));

    service.deletePromise('employee1').then(
      result => expect(result).toEqual(true));
  })

  it('should return expected employees ', () => {

    httpClientSpy.put.and.returnValue(of(true));

    service.putPromise('', {}).then(
      result => expect(result).toEqual(true),
      fail
    );
  });

  it('should return expected employees ', () => {

    httpClientSpy.post.and.returnValue(of(true));

    service.postPromise('', {}).then(
      result => expect(result).toEqual(true),
      fail
    );
  });

});
