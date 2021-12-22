import { P404Component } from './components/p404/p404.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationExperienceComponent } from './components/education-experience/education-experience.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';

const routes: Routes = [

    { path: 'about', component: AboutComponent },
    { path: 'personal-information', component: PersonalInformationComponent },
    { path: 'education-experience', component: EducationExperienceComponent },
    { path: 'portfolio', component: PortfolioComponent },  
    { path: '', component: AboutComponent, pathMatch: 'full' },
    { path: '**', component: P404Component, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }