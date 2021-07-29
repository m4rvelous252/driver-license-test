import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { PATHS, STYLE } from 'src/app/model/constants';


@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent implements OnInit {

  @Input() category?: Category

  style=STYLE

  paths=PATHS

  constructor() { }

  ngOnInit(): void {
  }

}
