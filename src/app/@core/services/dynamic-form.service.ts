import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DynamicComponentConfig } from '../configs/dynamic-component-config'

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  toFormGroup(dynamicComponents: DynamicComponentConfig<string>[]): FormGroup {

    const group: any = {};

    dynamicComponents.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });

    return new FormGroup(group);
  }
}
