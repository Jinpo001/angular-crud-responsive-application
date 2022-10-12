import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicComponentConfig, CustomTextBox } from 'src/app/@core/configs/dynamic-component-config';

import { CustomInputComponent } from './custom-input.component';

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;
  const dynamicComponentConfig: DynamicComponentConfig<string> =
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

  // return ;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    component.component = dynamicComponentConfig
    component.formGroup = group
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
