import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { CallbackComponent } from './pages/callback/callback.component';


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
    path : 'callback',
    component:CallbackComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  // {
  //   path:'**',
  //   component:PagenotfoundComponent
  // }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
