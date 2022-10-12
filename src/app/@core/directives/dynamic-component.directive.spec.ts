import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomTextBox } from '../configs/dynamic-component-config';
import { RegisterComponentService } from '../services/register-component.service';
import { DynamicComponentDirective } from './dynamic-component.directive';

describe('DynamicComponentDirective', () => {

  let directive: DynamicComponentDirective;
  const dynamicComponentConfig =
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
  const group = new FormGroup({ employeeID: new FormControl('') });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicComponentDirective,
        { provide: RegisterComponentService, useClass: RegisterComponentServiceMock },
        { provide: ViewContainerRef, useClass: ViewContainerRefMock },
        { provide: ComponentFactoryResolver, useClass: ComponentFactoryResolverMock }]
    })
    directive = TestBed.inject(DynamicComponentDirective);
    TestBed.inject(RegisterComponentService);
    TestBed.inject(ViewContainerRef);
    TestBed.inject(ComponentFactoryResolver);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });


  it('should be Init', () => {
    directive.component = dynamicComponentConfig
    directive.formGroup = group
    directive.ngOnInit();
    expect(directive).toBeTruthy();
  });

});


class RegisterComponentServiceMock {

  getComponent(name: string): boolean {
    return true;
  }

}

class ViewContainerRefMock {

  clear(): void { }

  createComponent(factory: any): any {
    return { instance: {} }
  }
}

class ComponentFactoryResolverMock {

  resolveComponentFactory(component: any): boolean {
    return true;
  }
}
