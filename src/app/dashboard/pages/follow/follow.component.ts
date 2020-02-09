import { Component, OnInit } from '@angular/core';
import { ProfileEvent, ProfileCardConfig } from '../../CommonComponents/profile-card/profile-card.component';
import { PageHeaderData } from '../../CommonComponents/page-header/page-header.component';
import { User } from '../../model/twitter.model';
import { DashboardService } from '../../service/dashboard.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  pageHeaderData : PageHeaderData;
  twitterHandle : String;

  searchPotentialFollowerForm : FormGroup;

  cardConfig : ProfileCardConfig = {
    takeAction : true
  };

  followerList : User[] = [];

  selectedList : string[] = [];

  constructor(private readonly dashboardService : DashboardService) { }

  ngOnInit() {
    this.loadPageHeading();
    this.initSearchPotentialFollowerForm();
    //this.loadFollowerList();
  }

  initSearchPotentialFollowerForm(){
    this.searchPotentialFollowerForm = new FormGroup({
      'searchHandle' : new FormControl('')
    })
  }

  onSearchPotentialFollowerFormSubmit(){
    const {searchHandle} = this.searchPotentialFollowerForm.value;
    this.twitterHandle = searchHandle;
    this.loadFollowerList();
    //console.log(this.searchPotentialFollowerForm.value);
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
    const params = {
      'twitterHandle' : this.twitterHandle
    }
    this.dashboardService.loadPotentailFollower(params).subscribe(response => {
      //console.log(response);
      if(!response.error){
        this.followerList = response;
      }
    });
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
