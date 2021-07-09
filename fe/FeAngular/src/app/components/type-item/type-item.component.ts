
import { Type } from 'src/app/model/Type';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Question } from 'src/app/model/Question';
import { TypeService } from 'src/app/services/type/type.service';


@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {


  type? : Type 
 
    
  constructor(private typeService:TypeService) { }

  ngOnInit(): void {
    this.typeService.getTypeQuestions().subscribe((type)=>(this.type=type,console.log(this.type), this.addIndex()));
  }

  addIndex(){
    var i = 1;
    this.type?.questions.forEach(question => {
        question.index = i;
        i++;
        //question.is_done='blue';
    });
  }

}
