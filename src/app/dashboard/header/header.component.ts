import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private readonly authService : AuthService ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('dashboard-header').classList.add('bg-lightx');
      //document.getElementById('paragraph').classList.add('green');
    }else{
      document.getElementById('dashboard-header').classList.remove('bg-lightx');
    }
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }


}
