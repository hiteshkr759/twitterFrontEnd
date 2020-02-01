import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrivacyPolicesComponent } from './pages/privacy-polices/privacy-polices.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeService } from './service/home.service';
import { CallbackComponent } from './pages/callback/callback.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ContactUsComponent,
    PrivacyPolicesComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
