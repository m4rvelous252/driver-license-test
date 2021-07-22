import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { STYLE } from 'src/app/model/constants';
import { Category } from 'src/app/model/category';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  style = STYLE

  categories: Category[] = []

  id_user!: string

  constructor(private categoryService: CategoryService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_user = params['id_user'];
      }
    );
    if(this.id_user){
      this.categoryService.getAllCategoryByUser(this.id_user).subscribe((res)=> this.categories=res.data)
    }else{
      this.categoryService.getAllCategory().subscribe((res)=> this.categories=res.data)
    }
    
  }

}
