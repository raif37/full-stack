import { API_URL, JPA_URL } from './../app.constants';
import { Todo } from './../list-to-dos/list-to-dos.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  public data:any;

  constructor(private http: HttpClient ) { }

  retreiveAllTodos(username) {

    return this.http.get<Todo[]>(`${JPA_URL}/users/${username}/todos`);

  } 

  retreiveTodo(username, id) {

    return this.http.get<Todo>(`${JPA_URL}//users/${username}/get-todo/${id}`);

  } 

  deleteTodo(username, id) {
    this.data = [];
    return this.http.post(`${JPA_URL}/users/${username}/delete-todo/${id}`,this.data);

  } 

  updateTodo(username, id, data) {
    this.data = data;
    return this.http.post(`${JPA_URL}/users/${username}/update-todo/${id}`,this.data);

  } 

  createTodo(username, data) {
    this.data = data;
    return this.http.post(`${JPA_URL}/users/${username}/create-todo`, this.data);

  } 
}
