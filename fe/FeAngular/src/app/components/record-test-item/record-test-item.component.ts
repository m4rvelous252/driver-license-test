import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { STYLE } from 'src/app/model/constants';
import { Result } from 'src/app/model/result';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-record-test-item',
  templateUrl: './record-test-item.component.html',
  styleUrls: ['./record-test-item.component.css']
})
export class RecordTestItemComponent implements OnInit {
  style = STYLE

  @Input() result?: Result


  constructor(private testService : TestService) { }

  ngOnInit(): void {
  }

  viewDetails(result: Result){
    this.testService.getHistoryTestById(`${result.id}`)
  }

  getDuration(){
    return(this.result?.duration!*1000)
  }

  getPass(){
    if(this.result?.pass){
      return "green"
    }else{
      return "red"
    }
  }

}
