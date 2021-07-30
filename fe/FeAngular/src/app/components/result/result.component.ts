import { Component, OnInit } from '@angular/core';
import { KEY } from 'src/app/model/constants';
import { Result } from 'src/app/model/result';
import { Test } from 'src/app/model/test';
import { STYLE } from 'src/app/model/constants';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result!:Result
  style = STYLE

  constructor() { }

  ngOnInit(): void {
    const resultJson = localStorage.getItem(KEY.result);
    this.result = resultJson !== null ? JSON.parse(resultJson) : null;
    console.log(this.getDuration())
  }

  getDuration(){
    return (this.result.duration!*1000)
  }

}
