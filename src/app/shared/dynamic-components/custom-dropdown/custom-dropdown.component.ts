import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicComponentConfig } from 'src/app/@core/configs/dynamic-component-config';
import { CustomBaseComponent } from '../custom-base.component';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.sass']
})
export class CustomDropdownComponent extends CustomBaseComponent  {

  @Input() component: DynamicComponentConfig<string>;
  @Input() formGroup: FormGroup;

  constructor() {
    super()
  }

  get isValid(): boolean {
    return this.formGroup.controls[this.component.key].invalid
      && (this.formGroup.controls[this.component.key].touched || this.formGroup.controls[this.component.key].dirty);
  }
}
