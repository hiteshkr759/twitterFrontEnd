import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/twitter.model';
import { DashboardService } from '../../service/dashboard.service';
import { PageHeaderData } from '../../CommonComponents/page-header/page-header.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery : string;

  pageHeaderData : PageHeaderData;

  searchedUsers: User[] = [];

  constructor(private readonly route: ActivatedRoute,private readonly dashboardService : DashboardService) { }

  ngOnInit() {
    this.loadPageHeading();
    this.listenForSeachQuery();
  }

  loadPageHeading(){
    const pageHeaderData :  PageHeaderData = {
      heading : 'Search',
      body : 'Search User from Twitter',
    };
    this.pageHeaderData = pageHeaderData;
  }

  listenForSeachQuery(){
    this.route.params.subscribe(params => {
      this.searchQuery = params['searchQuery'];
      this.searchUser();
    });
  }

  searchUser(){
    const params = {
      q : this.searchQuery,
      include_entities : false,
      page:1,
      count : 20
    }
    const type = 'search';
    this.dashboardService.userTwitterProfile(params,type).subscribe(response => {
      this.searchedUsers=response;
      console.log('search response',response);
    });
  }


}
