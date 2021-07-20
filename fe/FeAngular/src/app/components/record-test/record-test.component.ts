import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/model/result';
import { Test } from 'src/app/model/test';
import { TestService } from 'src/app/services/test/test.service';
import { STYLE } from 'src/app/model/constants';

@Component({
  selector: 'app-record-test',
  templateUrl: './record-test.component.html',
  styleUrls: ['./record-test.component.css']
})
export class RecordTestComponent implements OnInit {

  historyResults?: Result[]

  style = STYLE

  constructor(private testService : TestService) { }

  ngOnInit(): void {
    this.testService.getHistoryTestOfUser().subscribe((Result)=>{
      this.historyResults = Result
    })
  }

  viewDetailResult(result : Result){
    this.testService.getHistoryTestById(`${result.id}`)
  }

}
