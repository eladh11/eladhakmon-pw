 import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll( ) {
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) { }
  
  ngOnInit(): void { }

  imgCollection: Array<object> = [
    {
      image:  "../../../assets/images/port1.png",
      thumbImage: '../../../assets/images/port1.png',
      alt: 'My Coupon System',
      title: 'My Coupon System'
    }, {
      image:  "../../../assets/images/port2.png",
      thumbImage: '../../../assets/images/port2.png',
      title: 'Moving Company Sales flyer',
      alt: 'Moving Company Sales flyer'
    }, {
      image:  "../../../assets/images/port3.png",
      thumbImage: '../../../assets/images/port3.png',
      title: 'Discounts Flair',
      alt: 'Discounts Flair'
    }, {
      image:  "../../../assets/images/port4.jpg",
      thumbImage: '../../../assets/images/port4.jpg',
      title: 'Professional Resume',
      alt: 'Professional Resume'
    }, {
      image:  "../../../assets/images/port1.png",
      thumbImage: '../../../assets/images/port1.png',
      title: 'Personal Trainer Logo',
      alt: 'Personal Trainer Logo'
    }
];

scrollToTop() {
  this.scroll.scrollToPosition([0, 0]);
}
}
