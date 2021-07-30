import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/category';
import { STYLE } from 'src/app/model/constants';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

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
    this.categoryService.getCategory(this.id_category).subscribe((res) => this.category=res.data)
    }
  }
