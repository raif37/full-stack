import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class HelloWorldBean {
  constructor(public message:string){ }
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  executeHelloWorldService() {

    return this.http.get<HelloWorldBean>('http://localhost:8082/hello-world-bean');

  } 

  executeHelloWorldPathVariableService(name) {

    return this.http.get<HelloWorldBean>(`http://localhost:8082/hello-world/path-variable/${name}`);

  }

}
