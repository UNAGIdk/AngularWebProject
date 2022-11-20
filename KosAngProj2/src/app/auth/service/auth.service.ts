import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/user/"
  
  constructor(
    private http: HttpClient,
    private token: JwtService,
    private router: Router
  ) { }

  login(email: string, password: string):Observable<any>{
    return this.http.post<any>(this.url + "login", {email, password})
  }

  logout(){
    this.token.removeToken()
    this.router.navigate(["login"])
  }
}