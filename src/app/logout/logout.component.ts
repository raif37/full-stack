import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit(): void {

    this.hardCodedAuthenticationService.logOut();
  }

}
