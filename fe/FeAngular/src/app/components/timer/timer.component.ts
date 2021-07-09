
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output() fiveMins: EventEmitter<any> = new EventEmitter()
  @Input() bgColor?: string;
  @Input() txColor?: string;


  constructor() { }

  ngOnInit(): void {
  }


  onFiveMin(event: { action: string; }){
    if (event.action === 'notify'){
      this.fiveMins.emit()
      console.log('warning works')
    }
    
  }
}