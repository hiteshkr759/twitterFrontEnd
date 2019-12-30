import { Component, OnInit } from '@angular/core';
import { PageHeaderData } from '../../CommonComponents/page-header/page-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageHeaderData : PageHeaderData;

  constructor() { }

  ngOnInit() {
    this.loadPageHeading();
  }

  loadPageHeading(){
    const pageHeaderData :  PageHeaderData = {
      heading : 'Home Page',
      body : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    };
    this.pageHeaderData = pageHeaderData;
  }

}
