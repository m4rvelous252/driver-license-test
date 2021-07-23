import { Component, OnInit } from '@angular/core';
import { question } from 'src/app/model/question';
import { type } from 'src/app/model/type';
import { TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  
  newT: type = new type('', [])

  isNamed: boolean = false

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {

  }

  nameType(){
    this.isNamed = true
    console.log(this.newT)
  }

  rename(){
    this.isNamed = false
  }

  addQ(){
    var newQuestion:question = new question([],'')
    this.newT.questions.push(newQuestion!)
    // this.newT.questions.push(newQ)
    console.log(this.newT)
  }

  removeQ(index: number){
    this.newT.questions.splice(index,1)
  }

  submitT(){}

}
