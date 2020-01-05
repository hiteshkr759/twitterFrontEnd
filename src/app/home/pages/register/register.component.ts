import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private readonly homeService:HomeService) { }

  ngOnInit() {
    this.inilizeForm();
  }

  inilizeForm(){
    this.registerForm = new FormGroup({
      username : new FormControl('hiteshkr759',[Validators.required]),
      email :  new FormControl('hiteshkr759@gmail.com',[Validators.required,Validators.email]),
      password : new FormControl('123',[Validators.required]),
      confirmPassword : new FormControl('123',[Validators.required])
    });
  }

  validateFormData(data){
    return true;
  }

  onRegister(){
    const formData = this.registerForm.value;
    const isFormValid = this.validateFormData(formData);
    if(isFormValid){
      this.homeService.registerUser(formData).subscribe(response => {
        console.log('Response',response);
      })
    }else{
      console.log('Form Is invalid');
    }
    console.log(this.registerForm.value);
  }

}
