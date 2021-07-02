import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public errorMsg = "An error occured. GO have a stroll..!!"

  constructor() { }

  ngOnInit(): void {
  }

}
