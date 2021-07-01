import { Component, OnInit,Input } from '@angular/core';
import {Question} from '../../model/Question'
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() questions?: Question[] = [];

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((questions)=>(this.questions=questions,console.log(this.questions)));   
  }

}
