import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from '../../service/home.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private readonly authService  :AuthService, private readonly homeService : HomeService) { }

  ngOnInit() {
    this.inilizeForm();
  }

  inilizeForm(){
    this.loginForm = new FormGroup({
      email :  new FormControl('hiteshkr759@gmail.com',[Validators.required,Validators.email]),
      password : new FormControl('123',[Validators.required]),
    });
  }

  onSubmit(){
    const loginDate = this.loginForm.value;
    this.homeService.loginWithEmail(loginDate).subscribe(response => {
      const {username,email,token,type} = response;
      const userLoginDetail = {
        username,
        email,
        token : type +' '+ token,
        loginUsing : 'Email'
      }
      this.authService.login(userLoginDetail);
    })
  }

  onSignInWithTwitter(){
   // console.log('Signing with Twitter');
    this.homeService.loginWithTwitter()
      .subscribe(response => {
        console.log(response);
        const {logingUrl,oauthSecret} = response;
        localStorage.setItem('oauthSecret',oauthSecret);
        window.location.href = logingUrl;
      })
  }
  
}
