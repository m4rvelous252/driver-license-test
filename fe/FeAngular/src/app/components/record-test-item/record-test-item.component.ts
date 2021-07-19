import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { STYLE } from 'src/app/model/constants';
import { Result } from 'src/app/model/result';

@Component({
  selector: 'app-record-test-item',
  templateUrl: './record-test-item.component.html',
  styleUrls: ['./record-test-item.component.css']
})
export class RecordTestItemComponent implements OnInit {
  style = STYLE

  @Input() result?: Result

  @Output() onViewDetails: EventEmitter<Result> = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
  }

  viewDetails(result: Result){
    this.onViewDetails.emit(result)
  }

}
