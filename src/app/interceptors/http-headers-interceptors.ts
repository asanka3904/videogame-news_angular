import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'your_rapid_api_key',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },

      setParams: {
        key: 'your_rawg_api_key',
      },
    });

    return next.handle(req);
  }
}
