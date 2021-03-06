import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { STYLE } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { UiService } from 'src/app/services/Ui/ui.service';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {


  style = this.uiService.getStyleMode()

  category?: Category

  id_category!:string

  viewMode: string = "type"

  link_add_quiz!:string
  link_add_type!:string

  quizDeleted : Quiz[] = []

  user?: User

  ownerId?: number

  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
    private route : ActivatedRoute,
    private router: Router,
    private uiService: UiService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id_category = params['id_category'];
      }
    );
    this.categoryService.getCategory(this.id_category).subscribe((res) => (this.category=res.data, this.ownerId=res.data.idUser))
    this.link_add_quiz = this.router.url + '/add-quiz'
    this.link_add_type = this.router.url + '/add-type'

    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;

  }

  viewType(){
    this.viewMode="type"

  }

  viewQuiz(){
    // await this.quizService.getQuizNotDeletedByCategoryId(this.category!.id).toPromise().then((res)=>{
    //   this.category!.quiz = res.data
    // })
    this.viewMode="quiz"
  }

  viewDetails(){

  }

  addType(){

  }

  deleteQuiz(quiz : Quiz){
    console.log("hey")
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

  checkOwner(){
    if(this.ownerId==this.user?.id){
      return true
    } else {   
      return false
    }
  }

}
