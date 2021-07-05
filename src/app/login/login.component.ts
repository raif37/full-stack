import { BasicAuthenticationService } from './../service/basic-authentication-service';
import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = "raif";
  public password = "";
  public errorMsg = "You are not authorised to view"
  public invalidLogin = false;
  constructor(private route : Router,
              public hardcodeAuhenticateService: HardCodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    // if(this.username === 'raif' && this.password === 'abc'){
      if(this.hardcodeAuhenticateService.authenticate(this.username,this.password)) {   
      this.invalidLogin = false;
        this.route.navigate(['/home', this.username]);
      } else {
        this.invalidLogin = true;
      }
  }

  basicAuthLogin() {
    // if(this.username === 'raif' && this.password === 'abc'){
      this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
        data => {
          console.log(data);
          this.route.navigate(['/home', this.username]);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
          console.log(error);
        }
      )    
  }

  jwtLogin() {
    // if(this.username === 'raif' && this.password === 'abc'){
      this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(
        data => {
          console.log(data);
          this.route.navigate(['/home', this.username]);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
          console.log(error);
        }
      )    
  }

}
