import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { STYLE } from 'src/app/model/constants';
import { Result } from 'src/app/model/result';
import { TestService } from 'src/app/services/test/test.service';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-record-test-item',
  templateUrl: './record-test-item.component.html',
  styleUrls: ['./record-test-item.component.css']
})
export class RecordTestItemComponent implements OnInit {
  style = this.ui.getStyleMode()

  @Input() result?: Result


  constructor(
    private testService : TestService,
    private ui: UiService) { }

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
      return this.style.secondColor
    }else{
      return this.style.navColor
    }
  }

}
