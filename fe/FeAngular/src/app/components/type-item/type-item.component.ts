import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Type} from '../../model/Type'

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {

  @Input() type?: Type

  constructor() { }

  ngOnInit(): void {
  }

}
