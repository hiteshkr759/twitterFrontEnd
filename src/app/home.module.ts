import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomepageComponent } from './home/pages/homepage/homepage.component';
import { ContactUsComponent } from './home/pages/contact-us/contact-us.component';
import { PrivacyPolicesComponent } from './home/pages/privacy-polices/privacy-polices.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ContactUsComponent,
    PrivacyPolicesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
