import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';


@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent implements OnInit {

  @Input() category ?: Category


  constructor() { }

  ngOnInit(): void {

  }

}
