import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ExceptionInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(mergeMap((event: any) => {
      if (event instanceof HttpResponse && event.status === 200) {
        console.log('Some error response: ', event);
      }
      return of(event);
    }),
      catchError(err => {
        console.log('Some error message: ', err);
        return of(`I caught: ${err}`);
      })
    );
  }
}

