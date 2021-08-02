import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: Category[] = []

  constructor() { }

  ngOnInit(): void {

  }

  print(){
    let box = document.querySelector('.grid');
    let width = box!.clientWidth;
    let height = box!.clientHeight;
    console.log(width/252)
    console.log(this.categories.length)
  }

}
