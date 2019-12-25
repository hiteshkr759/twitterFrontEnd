import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './home/pages/homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './home/pages/contact-us/contact-us.component';


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
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
