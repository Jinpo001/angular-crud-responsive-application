import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb(): any {
    const employees = [
      {
        employeeID: 'EMP2020-01',
        fullName: 'John',
        address: 'First Line Address',
        sex: 'male',
        cardNumber: 'CN2000000001',
        homePhone: '+91 91-8888-8888',
        email: 'John@outlook.com',
        briefIntroduction: `Some quick example text to build on the employee and make up the bulk of the employee's content.`,
        active: true
      },
      {
        employeeID: 'EMP2020-02',
        fullName: 'Jinpo',
        sex: 'female',
        address: 'First Line Address',
        cardNumber: 'CN2000000002',
        homePhone: '+91 91-8888-8888',
        email: 'jinpo@@outlook.com',
        briefIntroduction: 'Some quick example text to build on the employee.',
        active: true
      },
      {
        employeeID: 'EMP2020-03',
        fullName: 'Jinpo.guo',
        sex: 'male',
        address: 'First Line Address',
        cardNumber: 'CN2000000003',
        homePhone: '+91 91-8888-8888',
        email: 'jinpo.guo@@outlook.com',
        briefIntroduction: `Some quick example text to build on the employee and make up the bulk of the employee's content.`,
        active: true
      }
    ];
    return { employees };
  }



}


