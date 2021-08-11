import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Quiz } from 'src/app/model/quiz';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { UiService } from 'src/app/services/Ui/ui.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  style = this.ui.getStyleMode()

  user?: User

  topCategories: Category[] =[];

  newCategories: Category[] =[];

  topquizzes: Quiz[] =[];

  constructor(private ui : UiService, private categoryService : CategoryService, private cdr: ChangeDetectorRef, private quizService : QuizService) {}

  ngOnInit() {
   this.categoryService.getTopCategory(0,12).subscribe((req) => (
      this.topCategories = req.data,
      this.cdr.detectChanges()
    ))

    this.categoryService.getNewCategory(0,12).subscribe((req) => (
      this.newCategories = req.data,
      this.cdr.detectChanges()
    ))

    this.quizService.getTopQuiz(0,12).subscribe((req) => (
      this.topquizzes = req.data,
      this.cdr.detectChanges()
    ))

    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;

  }
}
