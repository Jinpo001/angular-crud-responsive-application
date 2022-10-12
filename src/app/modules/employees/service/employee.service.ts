import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomDropdown, CustomTextBox, DynamicComponentConfig } from 'src/app/@core/configs/dynamic-component-config';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/@core/util/http.service'
import { Employee } from 'src/app/@core/models/employee'
import { EmployeeLayoutConfig } from 'src/app/@core/configs/employee-layout-config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];
  constructor(public http: HttpService) { }
  employeeGetURL = environment.employeeURL
  private employeesUrl = 'api/employees';  // URL to web api

  async getComponents(employID: string, viewType: string): Promise<any> {
    try {
      this.employees = await this.getEmployeeList()
      const employee = this.employees.find(item => item.employeeID === employID)
      return new EmployeeLayoutConfig(employee, viewType).dynamicComponentConfig;
    } catch (error) {
      console.log(error)
    }

  }

  async getEmployeeList(): Promise<Employee[]> {
    try {
      if (!this.employees) {
        this.employees = await this.http.getPromise(this.employeesUrl)
      }
      return this.employees;
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async deleteEmployeeByID(employeeID: string): Promise<boolean> {
    try {
      this.employees = this.employees.filter(employee => employee.employeeID !== employeeID)
      return true
    } catch (error) {
      return false
    }
  }

  updateEmployee(employee: Employee): boolean {

    try {
      if (this.employees.findIndex((item: Employee) => item.employeeID === employee.employeeID) >= 0) {
        this.employees = this.employees.map(emp => {
          if (emp.employeeID === employee.employeeID) {
            return employee
          }
          return emp
        })
      } else {
        employee.active = true
        this.employees.push(employee)
      }
      return true
    } catch (error) {
      console.log(error)
      return false
    }


  }

}
