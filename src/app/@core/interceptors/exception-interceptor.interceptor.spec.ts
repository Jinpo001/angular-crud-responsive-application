import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ExceptionInterceptorInterceptor } from './exception-interceptor.interceptor';

describe('ExceptionInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ExceptionInterceptorInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: ExceptionInterceptorInterceptor = TestBed.inject(ExceptionInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should  intercept some thing', () => {
    const interceptor: ExceptionInterceptorInterceptor = TestBed.inject(ExceptionInterceptorInterceptor);
    interceptor.intercept(new HttpRequest('GET', ''), new HttpHandlerMock()).subscribe(
      item => expect(item).not.toBeNull()
    )

  });
});

export class HttpHandlerMock extends HttpHandler {
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return of()
  }
  constructor() {
    super()
  }
}
