import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/twitter.model';
import { PageHeaderData } from '../../CommonComponents/page-header/page-header.component';

@Component({
  selector: 'app-schedule-posts',
  templateUrl: './schedule-posts.component.html',
  styleUrls: ['./schedule-posts.component.scss']
})
export class SchedulePostsComponent implements OnInit {

  allPosts: Post[] = [];
  pageHeaderData : PageHeaderData;

  constructor() { }

  ngOnInit() {
    this.loadAllPost();
    this.loadPageHeading();
  }

  loadPageHeading(){
    const pageHeaderData :  PageHeaderData = {
      heading : 'Post',
      body : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    };
    this.pageHeaderData = pageHeaderData;
  }

  loadAllPost(){
    this.allPosts = [{
      id:123,
      message : 'Message',
      postdate: new Date(),
      authorName:'Hitesh Kumar',
      authorScreenName:'hiteshkr759',
      authorAvatarUrl :'https://pbs.twimg.com/profile_images/927241270975651840/xcbMX4Pp_bigger.jpg'
    },
    {
      id:123,
      message : 'Message 2',
      postdate: new Date(),
      authorName:'Hitesh Kumar',
      authorScreenName:'hiteshkr759',
      isMultiMedia : true,
      authorAvatarUrl :'https://pbs.twimg.com/profile_images/927241270975651840/xcbMX4Pp_bigger.jpg'
    }]
  }

  editMessage(message){
    console.log('Edit the message',message);
  }

}
