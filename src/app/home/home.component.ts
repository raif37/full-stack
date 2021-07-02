import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = '';

  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.actRoute.snapshot.params['name'];
  }

}
