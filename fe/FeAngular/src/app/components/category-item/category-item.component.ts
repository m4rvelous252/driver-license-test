import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  category?: Category

  viewMode: string = "quiz"

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

}
