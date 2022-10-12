import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { CustomDropdown, CustomTextBox, DynamicComponentConfig } from '../configs/dynamic-component-config';

import { DynamicFormService } from './dynamic-form.service';

describe('DynamicFormService', () => {
  let service: DynamicFormService;
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
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be formGroup', () => {
    expect(!(service.toFormGroup(dynamicComponentConfig))).toEqual(false);
  });

});
