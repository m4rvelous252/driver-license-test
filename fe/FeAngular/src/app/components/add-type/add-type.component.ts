import { Component, OnInit } from '@angular/core';
import { question } from 'src/app/model/question';
import { answer } from 'src/app/model/answer';
import { type } from 'src/app/model/type';
import { TypeService } from 'src/app/services/type/type.service';
import { NEWQUESTION, NEWQUESTION1, STYLE } from 'src/app/model/constants';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  style=STYLE

  newT: type = new type('', [])

  isNamed: boolean = false

  id_category!: string
  category?: Category

  constructor(private typeService: TypeService,private categoryService: CategoryService, private route : ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id_category = params['id_category'];
      }
    );
    this.categoryService.getCategory(this.id_category).toPromise().then((res) => this.category=res.data)
    this.newT.id_category = this.category?.id;
    // var newQuestion:question = new question([],'This is the first question', true)
    // this.newT.questions.push(newQuestion!)
    var newAnswer:answer = new answer()
    var newQuestion:question = new question([newAnswer],'', false)
    this.newT.questions.push(newQuestion!)
  }

  nameType(){
    this.isNamed = true
    console.log(this.newT)
  }

  rename(){
    this.isNamed = false
  }

  addQ(index: number){
    var newAnswer: answer = new answer()
    var newQuestion:question = new question([newAnswer],'', false)
    this.newT.questions.splice(index+1, 0, newQuestion!)
    // this.newT.questions.push(newQ)
    console.log(this.newT)
  }

  removeQ(index: number){
    this.newT.questions.splice(index,1)
  }

  submitT(){
    this.newT.id_category = this.category?.id
    this.typeService.addType(this.newT);
  }

}
