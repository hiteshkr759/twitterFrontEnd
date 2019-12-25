import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [{
  path:'',
  component: HomeComponent ,
  children:[{
    path : '',
    component:HomepageComponent
  },
  {
    path : 'contact-us',
    component:ContactUsComponent
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
