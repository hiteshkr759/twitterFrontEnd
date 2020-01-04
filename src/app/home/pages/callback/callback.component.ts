import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute,private readonly homeService : HomeService) { }

  ngOnInit() {
    this.getTwitterUserToken();
  }

  getTwitterUserToken(){
    const oauth_token: string = this.route.snapshot.queryParamMap.get('oauth_token');
    const oauth_verifier : string = this.route.snapshot.queryParamMap.get('oauth_verifier');
    const oauthSecret = localStorage.getItem('oauthSecret');
    this.homeService.getTwitterUser({oauth_token,oauth_verifier,oauthSecret}).subscribe((response)=>{
      console.log('response',response);
    });
    console.log(oauth_token,oauth_verifier);
  }

}
