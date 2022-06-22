  import {Component} from '@angular/core';


  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: "*", year: '2020', explanation: 'Graduate Full Stack Course at John Bryce College. GPA 90+ (600 hours)'},
    {position: "*", year: '2018',  explanation: 'As part of my military service I was Professional Athlete.'},
    {position: "*", year: '2018',  explanation: 'Bartenders. Whiskey Bar & Museum.'},
    {position: "*", year: '2018',  explanation: 'Graduate High School. Completion 12 years of schooling. Excellence in social activity.'},
    {position: "*", year:'2016' ,  explanation: 'Customer Service. sales center.'},
   ];
  
   /**
   * @title Basic use of `<table mat-table>`
   */
  @Component({
    selector: 'app-education-experience',
    templateUrl: './education-experience.component.html',
    styleUrls: ['./education-experience.component.css']
     
  })
  export class EducationExperienceComponent {
    displayedColumns: string[] = ['position', 'year', 'explanation'];
    dataSource = ELEMENT_DATA;
  }


  export interface PeriodicElement {
    year: string;
    explanation: string; 
    position: string;
  }