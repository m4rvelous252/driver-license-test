
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
<<<<<<< HEAD
  @Input() durationTime: any
=======
  @Input() durationTime!: number
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71


  constructor() { }

  ngOnInit(): void {
  }
}
