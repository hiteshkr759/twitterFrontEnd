import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from '../../service/home.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authService  :AuthService, private readonly homeService : HomeService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('onSubmit')
    const data = {
      'userName': 'hiteshkr759Test'
    }
    this.authService.login(data);
  }

  onSignInWithTwitter(){
   // console.log('Signing with Twitter');
    this.homeService.loginWithTwitter()
      .subscribe(response => {
        console.log(response);
        const {logingUrl,oauthSecret,oauthToken} = response;
        localStorage.setItem('oauthSecret',oauthSecret);
        localStorage.setItem('oauthToken',oauthToken);
        window.location.href = logingUrl;
      })
  }
  
}
