import { Component, OnInit } from '@angular/core';
import { KEY } from 'src/app/model/constants';
import { Result } from 'src/app/model/result';
import { Test } from 'src/app/model/test';
<<<<<<< HEAD
import { STYLE } from 'src/app/model/constants';
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result?:Result
<<<<<<< HEAD
  style = STYLE
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71

  constructor() { }

  ngOnInit(): void {
    const resultJson = localStorage.getItem(KEY.result);
    this.result = resultJson !== null ? JSON.parse(resultJson) : null;
  }

}
