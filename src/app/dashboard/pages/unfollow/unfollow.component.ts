import { Component, OnInit } from '@angular/core';
import { PageHeaderData } from '../../CommonComponents/page-header/page-header.component';
import { ProfileCardConfig, ProfileEvent } from '../../CommonComponents/profile-card/profile-card.component';
import { DashboardService } from '../../service/dashboard.service';
import { User } from '../../model/twitter.model';

@Component({
  selector: 'app-unfollow',
  templateUrl: './unfollow.component.html',
  styleUrls: ['./unfollow.component.scss']
})
export class UnfollowComponent implements OnInit {

  pageHeaderData : PageHeaderData;

  cardConfig : ProfileCardConfig = {
    takeAction : true
  };

  unfollowerList : User[] = [];

  selectedList : number[] = [];

  constructor(private readonly dashboardService : DashboardService) { }

  ngOnInit() {
    this.loadPageHeading();
    this.loadUnfollowerList();
  }

  loadPageHeading(){
    const pageHeaderData :  PageHeaderData = {
      heading : 'Potential Unfollower List',
      body : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      buttons : ['Unfollow All']
    };
    this.pageHeaderData = pageHeaderData;
  }

  loadUnfollowerList(){
    this.dashboardService.loadPotentailUnfollower().subscribe(response => {
      console.log(response);
      if(!response.error){
        this.unfollowerList = response;
      }
    });
  }

  handleProfileChecked(profileEvent : ProfileEvent){
    const {userId,checkedStatus} = profileEvent;
    if(!this.selectedList.includes(userId) && checkedStatus){
      this.selectedList.push(userId);
    }else{
      this.selectedList = this.selectedList.filter(e => e != userId);
    }
    // Setting the label of Header
    const buttonLabel = this.selectedList.length > 0 ?  'Unfollow' : 'Unfollow All'
    this.pageHeaderData.buttons = [buttonLabel];
  }

}
