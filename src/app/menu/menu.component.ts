import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isUserLoggedIn : boolean = false;

  constructor(public hardcodeAuhenticateService: HardCodedAuthenticationService) { }

  ngOnInit(): void {
    // this.isUserLoggedIn = this.hardcodeAuhenticateService.isUserLoggedIn();
  }

}
