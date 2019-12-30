import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly api: ApiService) { }

  loginWithTwitter(){
    //console.log('Service Login with Twitter');
    const path : string  = 'api/v1/twitter/login'; 
    return this.api.getWithParam({},path);
  }

}
