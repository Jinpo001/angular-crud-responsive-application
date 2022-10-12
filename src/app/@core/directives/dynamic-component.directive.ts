import { ComponentFactoryResolver, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomBaseComponent } from 'src/app/shared/dynamic-components/custom-base.component';
import { DynamicComponentConfig } from '../configs/dynamic-component-config';
import { RegisterComponentService } from '../services/register-component.service'

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective implements OnInit {

  // @Input() componentConfig: ComponentConfig;
  @Input('appDynamicComponent') component: DynamicComponentConfig<string>;
  @Input() formGroup: FormGroup;

  constructor(protected registerComponents: RegisterComponentService, public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    if (this.component) {
      this.createDynamicComponent(this.registerComponents.getComponent(this.component.name), this.component);
    }
  }


  createDynamicComponent(component: Type<any>, componentConfig: DynamicComponentConfig<string>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const componentIns = componentRef.instance as CustomBaseComponent
    componentIns.component = componentConfig;
    componentIns.formGroup = this.formGroup;
  }


}
