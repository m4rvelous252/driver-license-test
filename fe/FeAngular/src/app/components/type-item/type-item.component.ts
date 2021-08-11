
import { Type } from 'src/app/model/type';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { question, Question } from 'src/app/model/question';
import { answer } from 'src/app/model/answer';
import { TypeService } from 'src/app/services/type/type.service';
import { ActivatedRoute,Params, Router } from '@angular/router';
import {Location} from '@angular/common';
import { UiService } from 'src/app/services/Ui/ui.service';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/model/category';


@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {
  style=this.ui.getStyleMode()

  deletedQuestions: Question[] = []

  ownerId?: number;

  user?: User

  category: Category = {name: '',user: {},type:[], quiz:[], id: 0}

  type : Type = {type_name:'', questions: []}
  id_type!:string
  idCategory: string = ''

  constructor(
    private typeService:TypeService,
    private route : ActivatedRoute,
    private _location: Location,
    private ui: UiService,
    private categoryService: CategoryService) { }

  async ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_type = params['id_type'];
      }
    );
    await this.typeService.getTypeQuestions(this.id_type).toPromise().then((res)=>(this.type=res.data, this.idCategory = res.data.id_category));

    await this.categoryService.getCategory(this.idCategory!).toPromise().then((res)=>(this.category=res.data, this.ownerId=res.data.idUser))

    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;
  }

  addQ(index: number){
    var newAnswer: answer = new answer()
    var newQuestion:question = new question([newAnswer],'', false)
    this.type.questions.splice(index+1, 0, newQuestion!)
  // this.newT.questions.push(newQ)
    console.log(this.type)
  }

  removeQ(id: number, index: number){

    let deletedQuestion : Question[] = this.type.questions.filter(question => {return question.id === id})
    this.deletedQuestions.push(deletedQuestion[0])

    this.type.questions.splice(index,1)
    // console.log(this.deletedQuestions)
    // console.log(this.type.questions)
  }

  submitT(){
    this.typeService.addType(this.type);
    console.log(this.type)
  }

  backClicked() {
    this._location.back();
  }

  checkOwner(){
    if(this.ownerId==this.user?.id){
      return true
    } else {
      return false
    }
  }

}
