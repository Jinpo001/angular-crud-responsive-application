import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject: Subject<any>

  constructor() {
    this.subject = new Subject()
  }

  emit(eventName: string, params: any): void {
    this.subject.next(new CustomEventSub(eventName, params))
  }

  on(eventName: string): Observable<CustomEventSub> {
    const sub = this.subject.pipe(
      filter((event: CustomEventSub): boolean => {
        return event.name === eventName
      })
    )
    return sub
  }

}

export class CustomEventSub {
  constructor(public name: string, public params: any) {

  }
}
