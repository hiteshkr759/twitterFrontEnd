import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { share } from 'rxjs/operators';

@Injectable()
export class DashboardService {

  constructor(private readonly api: ApiService) { }

  loadLogedInUserTwitterProfile(){
    const path : string = 'api/v1/twitter/verifyCredentials';
    return this.api.getWithParam({},path).pipe(
      share()
    );
  }

  loadTwitterProfile(params){
    const path : string = 'api/v1/twitter/verifyCredentials';
    return this.api.getWithParam(params,path);
  }

  userTwitterProfile(params:any, type : string){
    const path:string = 'api/v1/twitter/users/'+type;
    return this.api.postData(params,path);
  }

  loadPotentailFollower(params:any){
    const path:string = 'api/v1/twitter/potentialFollower';
    return this.api.getWithParam(params,path);
  }

  loadPotentailUnfollower(){
    const path:string = 'api/v1/twitter/potentialUnfollower';
    return this.api.getWithParam({},path);
  }

}
