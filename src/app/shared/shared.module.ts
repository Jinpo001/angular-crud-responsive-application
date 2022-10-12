import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './dynamic-components/custom-input/custom-input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './dynamic-components/custom-dropdown/custom-dropdown.component';
import { DynamicComponentDirective } from '../@core/directives/dynamic-component.directive';


@NgModule({
  declarations: [CustomInputComponent,  DynamicFormComponent,
    CustomDropdownComponent, DynamicComponentDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [CustomInputComponent, DynamicFormComponent
    , CustomDropdownComponent, DynamicComponentDirective, ReactiveFormsModule],
  entryComponents: [CustomInputComponent, CustomDropdownComponent]
})
export class SharedModule {

}
