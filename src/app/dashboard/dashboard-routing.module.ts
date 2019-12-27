import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FollowComponent } from './pages/follow/follow.component';
import { HomeComponent } from './pages/home/home.component';
import { UnfollowComponent } from './pages/unfollow/unfollow.component';
import { SchedulePostsComponent } from './pages/schedule-posts/schedule-posts.component';
const routes: Routes = [{
  path:'',
  component : DashboardComponent,
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
