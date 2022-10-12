import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { DynamicComponentConfig, CustomDropdown, CustomTextBox } from 'src/app/@core/configs/dynamic-component-config';
import { DynamicFormService } from 'src/app/@core/services/dynamic-form.service';

import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let dynamicFormService: any;
  const dynamicComponentConfig: DynamicComponentConfig<string>[] = [
    new CustomDropdown({
      name: 'customDropdown',
      key: 'sex',
      label: 'Sex:',
      options: [
        { key: 'male', value: 'male' },
        { key: 'female', value: 'female' },
      ],
      order: 3
    }),
    new CustomTextBox({
      name: 'customInput',
      key: 'employeeID',
      type: 'text',
      label: 'Employee ID:',
      required: true,
      order: 1
    })]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicFormComponent, { provide: DynamicFormService, useClass: DynamicFormService }]
    })
    component = TestBed.inject(DynamicFormComponent);
    dynamicFormService = TestBed.inject(DynamicFormService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employee list after Angular calls ngOnChanges', () => {
    component.ngOnChanges({});
    expect(component.formGroup).not.toBeNull();
  });

  it('should load employee list after Angular calls onSubmit', () => {
    component.ngOnChanges({});
    component.onSubmit();
    expect(component.payLoad.length).toBeGreaterThan(1);
  });


});

// class MockUserService {

//   toFormGroup(components: DynamicComponentConfig<string>[]): FormGroup {
//     return new FormGroup({});
//   };

// }
