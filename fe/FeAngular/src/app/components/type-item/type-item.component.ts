
import { Type } from 'src/app/model/type';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { question, Question } from 'src/app/model/question';
import { TypeService } from 'src/app/services/type/type.service';
import { STYLE } from 'src/app/model/constants';
import { ActivatedRoute,Params, Router } from '@angular/router';


@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {


  type? : Type
  id_type!:string 
 
  primeTxtColor = STYLE.primeTxtColor
  secondTxtColor = STYLE.secondTxtColor
  primeColor = STYLE.primeColor
  selectColor = STYLE.secondColor
  navColor = STYLE.navColor
  warningColor = STYLE.warningColor
  bgColor = STYLE.bgColor

    
  constructor(private typeService:TypeService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_type = params['id_type'];
      }
    );
    this.typeService.getTypeQuestions(this.id_type).subscribe((res)=>(this.type=res.data));
  }

  addIndex(){
    this.type?.questions.forEach(question => { 
      question.edit=true
    });
  }

}
