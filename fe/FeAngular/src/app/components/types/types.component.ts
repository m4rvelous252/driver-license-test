import { Component, OnInit } from '@angular/core';
import {Type} from '../../model/Type'
import { TypeService } from '../../services/type/type.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types: Type[] = [];

  constructor(private typeService:TypeService) {  }

  ngOnInit(): void {
    this.typeService.getTypes().subscribe((types)=>(this.types=types,console.log(this.types)));
  }

}
