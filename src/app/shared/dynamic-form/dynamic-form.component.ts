import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicComponentConfig } from '../../@core/configs/dynamic-component-config'
import { DynamicFormService } from '../../@core/services/dynamic-form.service'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass']
})
export class DynamicFormComponent implements OnChanges {

  @Input() dynamicComponents: DynamicComponentConfig<string>[] = [];
  @Input() isShow = true;
  @Output() saveData = new EventEmitter();

  formGroup: FormGroup;
  payLoad = '';

  constructor(private qcs: DynamicFormService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroup = this.qcs.toFormGroup(this.dynamicComponents);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.formGroup.getRawValue());
    this.saveData.emit(this.formGroup.getRawValue());
  }

}
