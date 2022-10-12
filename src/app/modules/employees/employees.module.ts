import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [EmployeesComponent, UpdateEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
