import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Input() border!: string;

  @Input() textColor!: string;
  @Input() widthPer!: string;
  @Input() textAlign!: string;
  @Input() borderRadius!: string;
  @Input() display!: string;
  @Input() btnWidth!: string;
  @Input() img!: string;
  @Input() fontSize!: string
  @Input() height!: string
  @Input() icon!: string
  @Input() fontFamily!: string
  @Input() fontWeight!: string
  @Input() background?: string


  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.img)
  }

  onClick(){
    this.btnClick.emit();
  }

}
