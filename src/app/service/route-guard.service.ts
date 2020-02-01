import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class RouteGuardService implements CanActivate {

  constructor(private readonly authService : AuthService, private readonly router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    if(!isLoggedIn){
      this.router.navigateByUrl('/login').catch(e => {
        console.log(e);
      });
    }
    console.log('Can Activate'+isLoggedIn);
    return isLoggedIn;
  }


}
