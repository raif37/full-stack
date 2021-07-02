import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.scss']
})
export class ListToDosComponent implements OnInit {

  todos = [ { id : 1, description : 'Learn Angular' },
            { id : 2, description : 'Become and expert' },
            { id : 3, description : 'Train Others' }
          ]

  constructor() { }

  ngOnInit(): void {
  }

}
