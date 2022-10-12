import { FormGroup } from '@angular/forms';
import { DynamicComponentConfig } from '../../@core/configs/dynamic-component-config';

export abstract class CustomBaseComponent {
    component: DynamicComponentConfig<string>;
    formGroup: FormGroup;
}
