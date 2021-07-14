import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { STYLE } from 'src/app/model/constants';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  primeTxtColor = STYLE.primeTxtColor
  secondTxtColor = STYLE.secondTxtColor
  primaryColor = STYLE.primeColor
  selectColor = STYLE.secondColor
  navColor = STYLE.navColor
  warningColor = STYLE.warningColor

  style = STYLE

  category?: Category

  viewMode: string = "type"

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((category) => this.category=category)
  }

  viewType(){
    this.viewMode="type"    
  }

  viewQuiz(){
    this.viewMode="quiz"
  }

  viewDetails(){

  }
}
