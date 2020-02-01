import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly api: ApiService) { }

  loginWithEmail(params){
    const path : string  = 'api/v1/users/login';
    return this.api.postData(params,path);
  }

  loginWithTwitter(){
    //console.log('Service Login with Twitter');
    const path : string  = 'api/v1/twitter/login'; 
    return this.api.getWithParam({},path);
  }

  getTwitterUser(params){
    const path:string  = 'api/v1/twitter/callback';
    return this.api.getWithParam(params,path);
  }


  registerUser(params){
    const path : string = 'api/v1/users/register';
    return this.api.postData(params,path);
  }



}
