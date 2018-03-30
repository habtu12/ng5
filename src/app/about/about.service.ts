import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {environment} from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class AboutService {
  private actionUrl: string;

  constructor(private http: HttpClient) {
    this.actionUrl = API_URL + 'todos';
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    }

    req = req.clone({headers: req.headers.set('Accept', 'application/json')});
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}
