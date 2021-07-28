import { Component } from '@angular/core';
import { STYLE } from './model/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeAngular';
  style = STYLE
}
