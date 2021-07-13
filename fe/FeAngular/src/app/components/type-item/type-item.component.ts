
import { Type } from 'src/app/model/type';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Question } from 'src/app/model/question';
import { TypeService } from 'src/app/services/type/type.service';
import { STYLE } from 'src/app/model/constants';


@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {


  type? : Type 
 
  primeTxtColor = STYLE.primeTxtColor
  secondTxtColor = STYLE.secondTxtColor
  primeColor = STYLE.primeColor
  selectColor = STYLE.secondColor
  navColor = STYLE.navColor
  warningColor = STYLE.warningColor
  bgColor = STYLE.bgColor

    
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
