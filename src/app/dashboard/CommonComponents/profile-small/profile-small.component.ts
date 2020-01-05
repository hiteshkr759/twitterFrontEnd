import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/twitter.model';

@Component({
  selector: 'app-profile-small',
  templateUrl: './profile-small.component.html',
  styleUrls: ['./profile-small.component.scss']
})
export class ProfileSmallComponent implements OnInit {

  @Input() user : User;

  constructor() { }

  ngOnInit() {
  }

}
