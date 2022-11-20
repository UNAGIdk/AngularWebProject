import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  setToken(data:any){
    localStorage.setItem("token", data)
  }

  getToken(){
    return localStorage.getItem("token")
  }

  removeToken(){
    localStorage.removeItem("token")
  }
}