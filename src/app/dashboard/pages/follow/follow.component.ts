import { Component, OnInit } from '@angular/core';
import { ProfileEvent } from '../../CommonComponents/profile-card/profile-card.component';
import { PageHeaderData } from '../../CommonComponents/page-header/page-header.component';
import { User } from '../../model/twitter.model';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  pageHeaderData : PageHeaderData;

  followerList : User[] = [];

  selectedList : number[] = [];

  constructor() { }

  ngOnInit() {
    this.loadFollowerList();
    this.loadPageHeading();
  }

  loadPageHeading(){
    const pageHeaderData :  PageHeaderData = {
      heading : 'Potential Follower List',
      body : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      buttons : ['Follow All']
    };
    this.pageHeaderData = pageHeaderData;
  }

  loadFollowerList(){
    this.followerList = [
        {
        id:12345,
        name:'Hitesh Kumar',
        screen_name : 'hiteshr759',
        profile_image_url_https:'https://pbs.twimg.com/profile_images/927241270975651840/xcbMX4Pp_bigger.jpg',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },{
        id:8888,
        name:'Hitesh Kumar 2',
        screen_name : 'hiteshr9406',
        profile_image_url_https:'https://pbs.twimg.com/profile_images/927241270975651840/xcbMX4Pp_bigger.jpg',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      }
    ]
  }

  

  handleHeaderAction(buttonLabel : string){
    this.handleFollow();
  }

  handleFollow(){
    let userFollowList = [];
    if(this.selectedList.length > 0 ){
      userFollowList = [...this.selectedList]
    }else{
      userFollowList = this.followerList.map( (e : User) => e.id);
    }
    console.log('Start following',userFollowList);
  }

  handleProfileChecked(profileEvent : ProfileEvent){
    const {userId,checkedStatus} = profileEvent;
    if(!this.selectedList.includes(userId) && checkedStatus){
      this.selectedList.push(userId);
    }else{
      this.selectedList = this.selectedList.filter(e => e != userId);
    }
    // Setting the label of Header
    const buttonLabel = this.selectedList.length > 0 ?  'Follow' : 'Follow All'
    this.pageHeaderData.buttons = [buttonLabel];
  }


}
