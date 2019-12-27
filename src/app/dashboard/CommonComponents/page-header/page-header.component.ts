import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {  } from 'protractor';

export interface PageHeaderData {
  heading : string;
  body?:string;
  buttons? : string[]; 
}

interface Action{
  buttonLabel : string;
  buttonAction : string;
}

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() pageHeaderData : PageHeaderData;
  @Output() action? : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleAction(buttonName:string){
    console.log('hanldeAcct',buttonName);
    this.action.emit(buttonName);
  }


}
