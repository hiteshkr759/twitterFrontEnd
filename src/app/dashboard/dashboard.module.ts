import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FollowComponent } from './pages/follow/follow.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { UnfollowComponent } from './pages/unfollow/unfollow.component';
import { SchedulePostsComponent } from './pages/schedule-posts/schedule-posts.component';
import { ProfileCardComponent } from './CommonComponents/profile-card/profile-card.component';
import { PostComponent } from './CommonComponents/post/post.component';
import { EditPostComponent } from './CommonComponents/edit-post/edit-post.component';
import { PageHeaderComponent } from './CommonComponents/page-header/page-header.component';
import { PostService } from './service/post.service';


@NgModule({
  declarations: [DashboardComponent, FollowComponent, HeaderComponent, SidebarComponent, HomeComponent, UnfollowComponent, SchedulePostsComponent, ProfileCardComponent, PostComponent, EditPostComponent, PageHeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers:[PostService]
})
export class DashboardModule { }
