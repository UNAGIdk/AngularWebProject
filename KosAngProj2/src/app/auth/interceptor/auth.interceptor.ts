import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private http: HttpClient,
    private jwtToken: JwtService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwtToken.getToken();
    const url = "http://localhost:3000"
    const isApi = request.url.startsWith(url)

    if(token && isApi){
      request = request.clone({
        setHeaders:{
          Authorization: "Bearer " + token
        }
      })
    }
    else{
      this.router.navigate(["login"])
    }
    
    return next.handle(request);
  }

}