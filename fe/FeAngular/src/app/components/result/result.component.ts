import { Component, OnInit } from '@angular/core';
import { KEY } from 'src/app/model/constants';
import { Result } from 'src/app/model/result';
import { Test } from 'src/app/model/test';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result?:Result

  constructor() { }

  ngOnInit(): void {
    const resultJson = localStorage.getItem(KEY.result);
    this.result = resultJson !== null ? JSON.parse(resultJson) : null;
  }

}
