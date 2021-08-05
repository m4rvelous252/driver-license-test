import { Component, OnInit, Input } from '@angular/core';
import { PATHS, STYLE } from 'src/app/model/constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit { 
  @Input()img?: String
  @Input()text?: String
  @Input()link?: String

  paths=PATHS
  style=STYLE

  constructor() { }

  ngOnInit(): void {
  }

}
