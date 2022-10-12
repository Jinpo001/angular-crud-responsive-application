import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterComponentService {

  componentMap = new Map();

  constructor() { }

  getComponent(name: string): Type<any> {
    return this.componentMap.get(name);
  }

  addComponent(name: string, component: Type<any>): void {
    this.componentMap.set(name, component)
  }
}
