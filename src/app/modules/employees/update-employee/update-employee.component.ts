import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { DynamicComponentConfig } from 'src/app/@core/configs/dynamic-component-config'
import { EmployeeService } from '../service/employee.service'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.sass']
})
export class UpdateEmployeeComponent implements OnInit, OnDestroy {

  // dynamicComponents$: Observable<DynamicComponentConfig<any>[]>
  dynamicComponents: DynamicComponentConfig<any>[] = []
  formGroup: FormGroup
  isShow = true
  viewModel: string
  payLoad = ''
  subscribeEmp$: Subscription
  constructor(public employeeService: EmployeeService, private route: ActivatedRoute, public router: Router) { }


  ngOnInit(): void {
    this.subscribeEmp$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.viewModel = params.get('1')
        this.isShow = params.get('1').toLowerCase() !== 'view'
        this.employeeService.getComponents(params.get('0'), params.get('1')).then((item: DynamicComponentConfig<any>[]) =>
          this.dynamicComponents = item
        ).catch(err => console.log(err))
      }
    )
  }
  saveData(data: any): void {
    this.employeeService.updateEmployee(data)
    this.router.navigate(['/employees'])
  }
  ngOnDestroy(): void {
    this.subscribeEmp$.unsubscribe()
  }


}
