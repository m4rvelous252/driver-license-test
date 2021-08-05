
import { Question } from '../../model/question';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DarkMode, KEY, LightMode, STYLE } from 'src/app/model/constants';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private doneQuestion?: Question;
  private btnColor?: string;

  private showQuestion: boolean = false;
  private subject = new Subject<any>();
  private subjectBackGroundColor = new Subject<any>();
  private subjectBackGroundImg = new Subject<any>();



  public backGroundImg!: string;

  public backGroundColor! :string;

  constructor() {
  }

  getStyleMode(){
    if(localStorage.getItem(KEY.LightMode)){
      return LightMode;
    }else{
      return DarkMode;
    }
  }

  changeButtonColor(question: Question) {
    this.doneQuestion = question

    this.subject.next(this.doneQuestion);
  }

  onToggleColor(): Observable<Question> {
    return this.subject.asObservable();
  }

  setBackGroundImg(img :string){
    this.backGroundImg = img;
    this.subjectBackGroundImg.next(this.backGroundImg);
  }

  getBackGroundImg(): Observable<any> {
    return this.subjectBackGroundImg.asObservable();
  }

  setBackGroundColor(color :string){
    this.subjectBackGroundColor.next(color);
  }

  getBackGroundColor(): Observable<any> {
    return this.subjectBackGroundColor.asObservable();
  }





}
