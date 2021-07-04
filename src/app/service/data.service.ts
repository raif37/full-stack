import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

    let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8082/hello-world/path-variable/${name}`, {headers});

  }

  createBasicAuthHttpHeader() {
    let username = 'raif';
    let password = 'abc';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}
