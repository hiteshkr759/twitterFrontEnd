import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';
import { DashboardService } from '../service/dashboard.service';
import { User } from '../model/twitter.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logedInUser : User;
  searchForm : FormGroup;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly authService : AuthService ,
    private readonly dashboardService : DashboardService,
    private readonly router:Router
  ) { }

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
    this.loadLoginProfile();
    this.loadSearchForm();
  }

  loadSearchForm(){
    this.searchForm = new FormGroup({
      'searchQuery' : new FormControl('',[Validators.required])
    });
  }

  onSearchFormSubmit(){
    console.log('Submitted Value',this.searchForm.value);
    const {searchQuery} = this.searchForm.value;
    this.router.navigate(['dashboard/search',searchQuery]);
  }
  
  logOut(){
    this.authService.logout();
  }

  loadLoginProfile(){
    this.dashboardService.loadLogedInUserTwitterProfile().subscribe(response => {
      this.logedInUser = response;
    });
  }

}
