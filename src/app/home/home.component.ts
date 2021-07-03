import { DataService } from '../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = '';
  public msgFrmService: String;


  constructor(private actRoute : ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.name = this.actRoute.snapshot.params['name'];
  }

  getWelcomeMsg() {
    console.log(this.dataService.executeHelloWorldService());

    this.dataService.executeHelloWorldService().subscribe(
      result => this.msgFrmService = result.message,
      error => this.handleErrorResponse(error)      
    );

  }

  getWelcomeMsgWithParameter() {
    console.log(this.dataService.executeHelloWorldService());

    this.dataService.executeHelloWorldPathVariableService(this.name).subscribe(
      result => this.msgFrmService = result.message,
      error => this.handleErrorResponse(error)      
    );

  }

  handleErrorResponse(error) {
    this.msgFrmService = error.error.message;
    
  }

}
