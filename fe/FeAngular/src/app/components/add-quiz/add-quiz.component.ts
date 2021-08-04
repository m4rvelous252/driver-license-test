import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Quiz } from 'src/app/model/quiz';
import { QuizType } from 'src/app/model/quiztype';
import { Type } from 'src/app/model/type';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  id_category!: string
  category?: Category
  quiz?: Quiz

  constructor(private categoryService: CategoryService, private route : ActivatedRoute) { }

  async ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_category = params['id_category'];
      }
    );
    await this.categoryService.getCategory(this.id_category).toPromise().then((res) => {
      this.quiz = new Quiz,
      this.quiz.quizType = [],
      this.quiz.name = "New Quiz",
      this.quiz.time = 600,
      this.quiz.id_category = res.data.id
    })
  }


}
