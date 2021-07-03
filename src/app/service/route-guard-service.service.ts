import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService implements CanActivate {

  constructor(private hardcodeAuhenticateService: HardCodedAuthenticationService,
              private route: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodeAuhenticateService.isUserLoggedIn())
      return true;

      this.route.navigate(['/login']);
    return false;
  }
}
