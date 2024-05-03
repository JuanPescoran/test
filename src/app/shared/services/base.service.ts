import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  basePath: string = `${environment.serverBasePath}`;
  resourceEdndpoint: string = `/resources`;
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  private resourcePath(){
    return `${this.basePath}${this.resourceEdndpoint}`;
  }

  getAll(){
    return this.http.get<T>(this.resourcePath(), this.httpOptions);
  }
}
