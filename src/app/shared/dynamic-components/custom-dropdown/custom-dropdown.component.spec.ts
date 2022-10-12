import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { DynamicComponentConfig, CustomDropdown } from 'src/app/@core/configs/dynamic-component-config';

import { CustomDropdownComponent } from './custom-dropdown.component';

describe('CustomDropdownComponent', () => {
  let component: CustomDropdownComponent;
  let fixture: ComponentFixture<CustomDropdownComponent>;
  const dynamicComponentConfig: DynamicComponentConfig<string> =
    new CustomDropdown({
      name: 'customDropdown',
      key: 'sex',
      label: 'Sex:',
      value: 'male',
      readonly: true,
      options: [
        { key: 'male', value: 'male' },
        { key: 'female', value: 'female' },
      ],
      order: 3
    })
  const group = new FormGroup({ sex: new FormControl('') });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDropdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownComponent);
    component = fixture.componentInstance;
    component.component = dynamicComponentConfig
    component.formGroup = group
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
