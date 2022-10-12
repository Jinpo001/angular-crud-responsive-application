import { analyzeAndValidateNgModules } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { CustomInputComponent } from 'src/app/shared/dynamic-components/custom-input/custom-input.component';

import { RegisterComponentService } from './register-component.service';

describe('RegisterComponentService', () => {
  let service: RegisterComponentService;
  const fixture: any = {};
  const componentMap = new Map();
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterComponentService);
    // fixture = TestBed.configureTestingModule({
    //   declarations: [CustomInputComponent]
    // }).createComponent(CustomInputComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    componentMap.set('name', fixture)
    service.addComponent('name', fixture);
    expect(!service.getComponent('name')).toBe(false);
  });


});
