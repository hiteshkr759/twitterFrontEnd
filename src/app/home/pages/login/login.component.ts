import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authService  :AuthService) { }

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
    console.log('Signing with Twitter');
  }
  
}
