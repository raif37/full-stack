import { TodoDataService } from './../service/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class Todo {
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
    public targetDate: Date
  ) { }
}


@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.scss']
})
export class ListToDosComponent implements OnInit {

  // todos = [ { id : 1, description : 'Learn Angular' },
  //           { id : 2, description : 'Become and expert' },
  //           { id : 3, description : 'Train Others' }
  //         ]

  public todos : Todo[];
  public message: String;
  constructor(private todoDataService: TodoDataService,
              private route: Router) { }

  ngOnInit(): void {

    this.refreshTodo();
  }

  refreshTodo() {
    this.todoDataService.retreiveAllTodos('raif').subscribe(
      response => {
        this.todos = response;
      }
    )

  }

  deleteTodo(id) {

    this.todoDataService.deleteTodo('raif', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of ${id} is Successful!`;
        this.refreshTodo();

      }
    )

  }

  updateTodo(id) {
    this.route.navigate(["/todo", id]);
  }

  addTodo() {
    this.route.navigate(["/todo", -1]);
  }
  

}
