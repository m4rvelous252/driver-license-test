import { Question } from './../../model/Question';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private doneQuestion?: Question;
  private btnColor?: string;

  private showQuestion: boolean = false;
  private subject = new Subject<any>();

  constructor() {
  }

  changeButtonColor(question: Question) {
    this.doneQuestion = question

    this.subject.next(this.doneQuestion);
  }

  onToggleColor(): Observable<Question> {
    return this.subject.asObservable();
  }



}
