import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
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

  id_category!:string

  viewMode: string = "type"

  constructor(private categoryService: CategoryService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_category = params['id_category'];
      }
    );
    this.categoryService.getCategory(this.id_category).subscribe((category) => this.category=category)
  }

  viewType(){
    this.viewMode="type"    
  }

  viewQuiz(){
    this.viewMode="quiz"
  }

  viewDetails(){

  }

  addType(){

  }

  
}
