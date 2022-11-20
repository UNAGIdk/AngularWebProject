import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specs } from './interface/specs.interface';
import { Directions } from './interface/directions.interface';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  url =  'http://localhost:3000/';

  getSpecs(): Observable<Specs[]> {
    return this.http.get<Specs[]>(this.url + "specs");
  }

  getDirs(): Observable<Directions[]> {
    return this.http.get<Directions[]>(this.url + "dirs");
  }

  createDirs(dirs: FormData){
    return this.http.post<Directions>(this.url + "dirs", dirs);
  }

  createSpecs(specs: FormData){
    return this.http.post<Specs>(this.url + "specs", specs);
  }
}