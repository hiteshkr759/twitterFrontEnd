import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { User } from '../../model/twitter.model'; 

export interface ProfileEvent {
  userId:number;
  checkedStatus : boolean;
}

export interface ProfileCardConfig{
  takeAction? : Boolean;
  showCounts?: Boolean;
}

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User;
  @Input() config? : ProfileCardConfig;
  @Output() profileChecked?: EventEmitter<ProfileEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.loadConfig();
  }

  loadConfig(){
    const defaultConfig : ProfileCardConfig = {
      takeAction : false,
      showCounts : true,
    }
    this.config = {...defaultConfig,...this.config}
  }

  handleCheckbox(isChecked : boolean){
    const event = {
      userId : this.user.id,
      checkedStatus : isChecked
    }
    this.profileChecked.emit(event);
  }

}
