import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PageHeaderData } from '../../CommonComponents/page-header/page-header.component';
import { DashboardService } from '../../service/dashboard.service';
import { User } from '../../model/twitter.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageHeaderData : PageHeaderData;
  logedInUser : User;
  interestedUsers : User[] = [];
  wiseListUserIds : string[] = [];
  whiteListUserIds: string[] = [];

  @ViewChild('whiteListUser',{static : false}) whiteListUsersElRef : ElementRef;

  constructor(private readonly dashboardService: DashboardService) { }

  ngOnInit() {
    //this.loadPageHeading();
    this.loadLogedInProfileData();
  }

  loadPageHeading(profileDetail : User){
    const {name,screen_name,description} = profileDetail;
    const pageHeaderData :  PageHeaderData = {
      heading : 'Welcome '+ name,
      body : description,
    };
    this.pageHeaderData = pageHeaderData;
  }




  loadLogedInProfileData(){
    this.dashboardService.loadLogedInUserTwitterProfile().subscribe(response => {
      this.logedInUser = response;
      const {wiseListUserIds,whiteListUserIds} = response.additionData;
      this.wiseListUserIds = wiseListUserIds.split(',');
      this.whiteListUserIds = whiteListUserIds.split(',');
      this.loadPageHeading(this.logedInUser);
      this.loadInterestedUsers();
    });
  }

  

  loadInterestedUsers(){
    const allInterestedIds = _.uniqBy([...this.wiseListUserIds,...this.whiteListUserIds],(id)=> id);
    const params = {
      user_id : allInterestedIds.join(',')
    }
    const type = 'lookup';
    this.dashboardService.userTwitterProfile(params,type).subscribe(response =>{
      this.interestedUsers = response;
      console.log('interestedUser',response);
    })
    console.log('Loading users',allInterestedIds);
  }
  
  getInterestedUsersById(userId : string) : User{
    const user : User[] = this.interestedUsers.filter(user => user.id_str == userId);
    if(user.length){
      return user[0];
    }
    return {};
  }

}
