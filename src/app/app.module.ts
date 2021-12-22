import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import {  PersonalInformationComponent } from './components/personal-information/personal-information.component';
import {  AboutComponent } from './components/about/about.component';
import {  EducationExperienceComponent } from './components/education-experience/education-experience.component';
import { MatTableModule } from '@angular/material/table';
import { PortfolioComponent } from './components/portfolio/portfolio.component'; 
import { NgImageSliderModule } from 'ng-image-slider';
import { P404Component } from './components/p404/p404.component';
import { RouterModule } from '@angular/router';
 
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    P404Component,
    PersonalInformationComponent,
    AboutComponent,
    EducationExperienceComponent,
    PortfolioComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    NgImageSliderModule,
    RouterModule
    
      ],  

    
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
 
})

export class AppModule { }