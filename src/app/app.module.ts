import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { RouteGuardService } from './service/route-guard.service';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    {
      path:'',
     // component:HomeComponent
      //loadChildren : './home/home.module#HomeModule'
      loadChildren : () => import('./home/home.module').then(m=>m.HomeModule)
    },
    {
      path:'dashboard',
     // component:HomeComponent
      //loadChildren : './dashboard/dashboard.module#DashboardModule',
      loadChildren :  () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
      path:'**',
      redirectTo:'/',
      pathMatch:'full'
    }
  ])
  ],
  providers: [AuthService,RouteGuardService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
