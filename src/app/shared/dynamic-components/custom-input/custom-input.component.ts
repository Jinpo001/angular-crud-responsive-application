import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicComponentConfig } from 'src/app/@core/configs/dynamic-component-config';
import { CustomBaseComponent } from '../custom-base.component'

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.sass']
})
export class CustomInputComponent extends CustomBaseComponent {
  @Input() component: DynamicComponentConfig<string>;
  @Input() formGroup: FormGroup;

  constructor() {
    super()
  }


  get isValid(): boolean { return this.formGroup.controls[this.component.key].invalid && (this.formGroup.controls[this.component.key].touched || this.formGroup.controls[this.component.key].dirty); }

}
