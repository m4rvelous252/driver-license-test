import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { STYLE } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { UiService } from 'src/app/services/Ui/ui.service';


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

  link_add_quiz!:string
  link_add_type!:string

  quizDeleted : Quiz[] = []

  backGroundColor = "#6D6767"



  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
    private route : ActivatedRoute,
    private router: Router,
    private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.setBackGroundColor(this.backGroundColor);
    this.route.params.subscribe(
      (params: Params) => {
        this.id_category = params['id_category'];
      }
    );
    this.categoryService.getCategory(this.id_category).subscribe((res) => this.category=res.data)
    this.link_add_quiz = this.router.url + '/add-quiz'
    this.link_add_type = this.router.url + '/add-type'
  }

  viewType(){
    this.viewMode="type"
  }

  async viewQuiz(){
    await this.quizService.getQuizNotDeletedByCategoryId(this.category!.id).toPromise().then((res)=>{
      this.category!.quiz = res.data
    })
    this.viewMode="quiz"
  }

  viewDetails(){

  }

  addType(){

  }

  deleteQuiz(quiz : Quiz){
    this.category?.quiz.splice(this.category.quiz.indexOf(quiz),1)
    this.quizService.deleteQuiz(quiz)

  }

  async viewDeleteQuiz(){
    await this.quizService.getQuizDeletedByCategoryId(this.category!.id).toPromise().then((res)=>{
      this.quizDeleted = res.data
    })
    this.viewMode="deleteQuiz"
  }

  async redoQuiz(quiz : Quiz){
    this.quizDeleted.splice(this.quizDeleted.indexOf(quiz),1)
    this.quizService.redoQuiz(quiz)
  }


}
