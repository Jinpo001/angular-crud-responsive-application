import { TestBed } from '@angular/core/testing';

import { CustomEventSub, EventBusService } from './event-bus.service';

describe('EventBusService', () => {
  let service: EventBusService;
  const event = new CustomEventSub('eventName', 'params');
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be work', () => {
    const observable = service.on('event')
    service.emit('event', 'params')
    observable.subscribe(item => {
      expect(item.params).toBe('params');
    })
  });


});


