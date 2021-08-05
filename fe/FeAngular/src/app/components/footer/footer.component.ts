import { Component, OnInit } from '@angular/core';
import { STYLE } from 'src/app/model/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  style=STYLE

  constructor() { }

  ngOnInit(): void {
  }

}
