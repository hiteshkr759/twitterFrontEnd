import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { User } from '../../model/twitter.model'; 

export interface ProfileEvent {
  userId:number;
  checkedStatus : boolean;
}

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User;
  @Output() profileChecked: EventEmitter<ProfileEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleCheckbox(isChecked : boolean){
    const event = {
      userId : this.user.id,
      checkedStatus : isChecked
    }
    this.profileChecked.emit(event);
  }

}
