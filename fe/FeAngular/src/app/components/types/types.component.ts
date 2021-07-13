import { Component, OnInit } from '@angular/core';
import {Type} from '../../model/type'
import { TypeService } from '../../services/type/type.service';

import { STYLE } from 'src/app/model/style';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {


  primeColor = STYLE.primeColor
  primeTxtColor = STYLE.primeTxtColor

  types: Type[] = [];

  constructor(private typeService:TypeService) {  }

  ngOnInit(): void {
    this.typeService.getTypes().subscribe((types)=>(this.types=types,console.log(this.types)));
  }

}
