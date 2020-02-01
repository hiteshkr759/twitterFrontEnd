import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly homeService : HomeService,
    private readonly authService : AuthService,
  ) { }

  ngOnInit() {
    this.getTwitterUserToken();
  }

  getTwitterUserToken(){
    const oauth_token: string = this.route.snapshot.queryParamMap.get('oauth_token');
    const oauth_verifier : string = this.route.snapshot.queryParamMap.get('oauth_verifier');
    const oauthSecret = localStorage.getItem('oauthSecret');
    this.homeService.getTwitterUser({oauth_token,oauth_verifier,oauthSecret}).subscribe((response)=>{
      
      console.log('CallbackResponse',response);
      localStorage.removeItem('oauthSecret');
      const {twitter_screenName,twitter_id,token} = response;
      const userLoginDetail = {
        twitter_screenName,
        twitter_id,
        token,
        loginUsing : 'Twitter'
      }
      this.authService.login(userLoginDetail);
    });
    //console.log(oauth_token,oauth_verifier);
  }

}
