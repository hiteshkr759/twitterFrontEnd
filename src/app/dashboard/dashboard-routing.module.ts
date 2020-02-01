import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FollowComponent } from './pages/follow/follow.component';
import { HomeComponent } from './pages/home/home.component';
import { UnfollowComponent } from './pages/unfollow/unfollow.component';
import { SchedulePostsComponent } from './pages/schedule-posts/schedule-posts.component';
import { RouteGuardService } from '../service/route-guard.service';
import { SearchComponent } from './pages/search/search.component';
const routes: Routes = [{
  path:'',
  component : DashboardComponent,
  canActivate:[RouteGuardService],
  children:[{
    path:'home',
    component : HomeComponent
  },
  {
    path:'follow',
    component : FollowComponent
  },
  {
    path:'unfollow',
    component : UnfollowComponent
  },
  {
    path:'schedule-posts',
    component : SchedulePostsComponent
  },
  {
    path:'search',
    redirectTo: 'search/'
  },
  {
    path:'search/:searchQuery',
    component : SearchComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch : 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
