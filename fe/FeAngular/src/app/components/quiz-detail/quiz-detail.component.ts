import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/category';
import { STYLE } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';
import { QuizType } from 'src/app/model/quiztype';
import { Type } from 'src/app/model/type';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  @Input() quiz!: Quiz

  id_category!: string
  category?: Category
  types: Type[] = []
  quiztypes : QuizType[] =[]

  style=STYLE

  name!: string
  time_min!: number
  time_sec!: number

  constructor(private categoryService: CategoryService, private route : ActivatedRoute, private quizService : QuizService) { }

  async ngOnInit() {
    console.log("id"+this.quiz.id_category)
    this.id_category = this.quiz.id_category+""
    await this.categoryService.getCategory(this.id_category).toPromise().then((res) => this.category=res.data)
    this.category!.type.forEach(type => {
      let quiztype = new QuizType;
      quiztype.type = type;
      quiztype.amount = 0;
      this.quiztypes.push(quiztype)
    });
    this.quiz.quizType.forEach(qt => {
      this.quiztypes.forEach(q => {
        if(qt.type.id==q.type.id){
          q.amount = qt.amount;
        }
      });
    });
    this.quiz.quizType = this.quiztypes;
  }

  save(){
    console.log(this.quiz)
    this.quizService.addNewQuiz(this.quiz)
  }

  setValue(){
    this.name = this.quiz.name;
    let min = Math.floor(this.quiz.time/60);
    let sec = this.quiz.time - min*60;
    this.time_min = min;
    this.time_sec = sec;
  }

  saveEdit(){
    this.quiz.name = this.name;
    this.quiz.time = this.time_min*60+this.time_sec*1;
  }
}
