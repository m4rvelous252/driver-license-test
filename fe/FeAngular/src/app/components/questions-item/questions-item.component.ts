import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Question} from '../../model/Question'

@Component({
  selector: 'app-questions-item',
  templateUrl: './questions-item.component.html',
  styleUrls: ['./questions-item.component.css']
})
export class QuestionsItemComponent implements OnInit {

  @Input() question?: Question

  constructor() { }

  ngOnInit(): void {
  }

}
