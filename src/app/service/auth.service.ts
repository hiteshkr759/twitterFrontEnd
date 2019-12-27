import { Injectable, NgModuleFactoryLoader } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private readonly router:Router) { }

  isLoggedIn(){
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  login(data? : any){
    const userData = {
      ...data
    }
    localStorage.setItem('currentUser', JSON.stringify(userData));
    this.router.navigateByUrl('/dashboard').catch(e => {
      console.log('Error',e);
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/').catch(e => {
      console.log('Error',e);
    });
  }

}
