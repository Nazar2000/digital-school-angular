import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    if (token) {
      const tokenReq: HttpRequest<any> = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
      return next.handle(tokenReq);
    }
    return next.handle(request);
  }
}
