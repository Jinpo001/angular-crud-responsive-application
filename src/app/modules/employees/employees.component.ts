import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/@core/models/employee';
import { EmployeeService } from './service/employee.service'


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {

  modalMessage = ''
  employees: Employee[]
  currentEmployeeID: string;
  constructor(public employeeService: EmployeeService) { }

  async ngOnInit(): Promise<void> {
    this.employees = await this.employeeService.getEmployeeList()
  }

  async delete(): Promise<void> {

    const result = await this.employeeService.deleteEmployeeByID(this.currentEmployeeID)

    if (result) {
      this.employees = this.employees.filter(employee => employee.employeeID !== this.currentEmployeeID)
    }
    document.getElementById('triggerShowModal')?.click()
  }

  showModal(employeeID: string): void {
    this.currentEmployeeID = employeeID
    this.modalMessage = ` are you sure want to delete this employee ( ${employeeID}) ?`
    document.getElementById('triggerShowModal')?.click()
  }
}
