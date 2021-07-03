import { TodoDataService } from './../service/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public id: number;
  public todo: Todo;

  constructor(private todoDataService: TodoDataService,
              private routeValue: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.id = this.routeValue.snapshot.params['id'];
    this.todo = new Todo(this.id, "" , false, new Date());

    if(this.id!=-1) {
    this.todoDataService.retreiveTodo('raif', this.id).subscribe(
      data => this.todo = data 
    )
    }
  }

  saveTodo() {

    if(this.id == -1) {

      this.todoDataService.createTodo('raif', this.todo).subscribe(
        data => {
          this.route.navigate(["/todo"]);
        }
      )
    } else {
    this.todoDataService.updateTodo('raif', this.id, this.todo).subscribe(
      data => {
        this.route.navigate(["/todo"]);
      }
    )
    }

  }

}
