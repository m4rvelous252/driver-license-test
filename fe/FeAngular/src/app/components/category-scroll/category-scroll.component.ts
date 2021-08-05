import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-scroll',
  templateUrl: './category-scroll.component.html',
  styleUrls: ['./category-scroll.component.css']
})
export class CategoryScrollComponent implements OnInit {

  constructor() { }

  @Input() categories : Category[] = []

  ngOnInit(): void {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: false
  }


}
